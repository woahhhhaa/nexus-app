import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  SelectChangeEvent,
  Button,
  Alert,
  CircularProgress,
  useTheme,
  Tabs,
  Tab
} from '@mui/material';
import { useNexus } from '../contexts/NexusContext';
import { NexusData } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';

function TabPanel({ children, value, index }: { children?: React.ReactNode; value: number; index: number }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
}

const StateComparison: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const { statesData, loading, isServiceBased } = useNexus();
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [comparisonData, setComparisonData] = useState<NexusData[]>([]);
  const [tabValue, setTabValue] = useState(isServiceBased ? 0 : 1);

  // Load selected from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const param = params.get('states');
    if (param) {
      setSelectedStates(param.split(','));
    }
  }, [location.search]);

  // Re-filter
  useEffect(() => {
    if (selectedStates.length === 0) {
      setComparisonData([]);
      if (location.search) {
        navigate(location.pathname, { replace: true });
      }
    } else {
      const subset = statesData.filter((st: NexusData) => selectedStates.includes(st.state));
      setComparisonData(subset);

      const query = new URLSearchParams();
      query.set('states', selectedStates.join(','));
      navigate(`${location.pathname}?${query}`, { replace: true });
    }
  }, [selectedStates, statesData, navigate, location.pathname, location.search]);

  const handleSelect = (event: SelectChangeEvent<string[]>) => {
    const val = typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value;
    setSelectedStates(val);
  };
  const handleClear = () => setSelectedStates([]);

  const handleTabChange = (e: React.SyntheticEvent, newVal: number) => {
    setTabValue(newVal);
  };

  if (loading) {
    return (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>State Nexus Comparison</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Select states to compare side-by-side. You can see both service-based and product-based rules.
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="compare-states-label">Select States</InputLabel>
          <Select
            multiple
            labelId="compare-states-label"
            value={selectedStates}
            onChange={handleSelect}
            input={<OutlinedInput label="Select States" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((s: string) => <Chip key={s} label={s} />)}
              </Box>
            )}
          >
            {statesData.map((s: NexusData) => (
              <MenuItem key={s.state} value={s.state}>
                {s.state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="outlined" disabled={!selectedStates.length} onClick={handleClear}>
          Clear
        </Button>
      </Paper>

      {selectedStates.length === 0 ? (
        <Alert severity="info">Select one or more states above to compare.</Alert>
      ) : (
        <>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
            <Tab label="Service-Based" />
            <Tab label="Product-Based" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>State</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Dollar Threshold</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Physical Presence</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Additional Criteria</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Source</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparisonData.map(st => (
                    <TableRow key={st.state}>
                      <TableCell>{st.state}</TableCell>
                      <TableCell>{st.serviceBased.dollarNexusThreshold || 'N/A'}</TableCell>
                      <TableCell>{st.serviceBased.physicalPresence || 'N/A'}</TableCell>
                      <TableCell>{st.serviceBased.additionalNexusCriteria || 'N/A'}</TableCell>
                      <TableCell>
                        {st.serviceBased.authoritativeSource && st.serviceBased.citation_url ? (
                          <a href={st.serviceBased.citation_url} target="_blank" rel="noopener noreferrer">
                            {st.serviceBased.authoritativeSource}
                          </a>
                        ) : (
                          st.serviceBased.authoritativeSource || 'No source'
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>State</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Dollar Threshold</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Physical Presence</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Additional Criteria</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Source</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparisonData.map((st: NexusData) => (
                    <TableRow key={st.state}>
                      <TableCell>{st.state}</TableCell>
                      <TableCell>{st.nonServiceBased.dollarNexusThreshold || 'N/A'}</TableCell>
                      <TableCell>{st.nonServiceBased.physicalPresence || 'N/A'}</TableCell>
                      <TableCell>{st.nonServiceBased.additionalNexusCriteria || 'N/A'}</TableCell>
                      <TableCell>
                        {st.nonServiceBased.authoritativeSource && st.nonServiceBased.citation_url ? (
                          <a href={st.nonServiceBased.citation_url} target="_blank" rel="noopener noreferrer">
                            {st.nonServiceBased.authoritativeSource}
                          </a>
                        ) : (
                          st.nonServiceBased.authoritativeSource || 'No source'
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </>
      )}
    </Box>
  );
};

export default StateComparison; 