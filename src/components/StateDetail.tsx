import React, { useState, ChangeEvent } from 'react';
import { 
  Paper, 
  Typography, 
  Box, 
  Divider, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  TextField,
  Link,
  Tooltip,
  Tabs,
  Tab
} from '@mui/material';
import { Edit as EditIcon, Compare as CompareIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { NexusData, NexusRuleset } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { useNexus } from '../contexts/NexusContext';
import { saveStateData } from '../services/nexusService';

interface StateDetailProps {
  state: NexusData;
  onClose?: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel({ children, index, value }: TabPanelProps) {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
}

const StateDetail: React.FC<StateDetailProps> = ({ state, onClose }) => {
  const { currentUser } = useAuth();
  const { isServiceBased, setIsServiceBased } = useNexus();
  const navigate = useNavigate();

  // display tab
  const [tabValue, setTabValue] = useState(isServiceBased ? 0 : 1);

  // edit dialog
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editTabValue, setEditTabValue] = useState(0);

  // local form data for serviceBased + nonServiceBased
  const [editForm, setEditForm] = useState({
    serviceBased: { ...state.serviceBased },
    nonServiceBased: { ...state.nonServiceBased }
  });

  const [submitStatus, setSubmitStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // switching between service vs. product tabs
  const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setIsServiceBased(newValue === 0);
  };
  const handleEditTabChange = (e: React.SyntheticEvent, newValue: number) => {
    setEditTabValue(newValue);
  };

  // open/close dialog
  const handleEditDialogOpen = () => {
    setEditDialogOpen(true);
  };
  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  // update local fields
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: 'serviceBased' | 'nonServiceBased'
  ) => {
    const { name, value } = e.target;

    // handle numeric fields
    if (['income_threshold', 'employee_count', 'property_value'].includes(name)) {
      const numVal = value === '' ? null : Number(value);
      setEditForm(prev => ({
        ...prev,
        [type]: {
          ...prev[type],
          [name]: numVal
        }
      }));
    } else {
      setEditForm(prev => ({
        ...prev,
        [type]: {
          ...prev[type],
          [name]: value
        }
      }));
    }
  };

  // save changes
  const handleSubmit = async () => {
    try {
      setSubmitStatus('loading');

      // build updated doc
      const updated: NexusData = {
        ...state,
        serviceBased: editForm.serviceBased,
        nonServiceBased: editForm.nonServiceBased,
        last_updated: new Date().toISOString(),
        contributor_id: currentUser?.uid || 'anonymous'
      };

      await saveStateData(updated);
      setSubmitStatus('success');

      // auto-close
      setTimeout(() => {
        handleEditDialogClose();
      }, 1200);
    } catch (err) {
      console.error('Error saving state data:', err);
      setSubmitStatus('error');
      setErrorMessage('Failed to save updates. Please try again.');
    }
  };

  // compare button
  const handleAddToCompare = () => {
    navigate(`/compare?states=${state.state}`);
  };

  // helper to display ruleset
  const renderRuleset = (ruleset: NexusRuleset) => {
    return (
      <Box>
        {ruleset.dollarNexusThreshold && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Dollar Nexus Threshold</Typography>
            <Typography variant="body2">{ruleset.dollarNexusThreshold}</Typography>
          </Box>
        )}
        {ruleset.physicalPresence && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Physical Presence</Typography>
            <Typography variant="body2">{ruleset.physicalPresence}</Typography>
          </Box>
        )}
        {ruleset.additionalNexusCriteria && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Additional Criteria</Typography>
            <Typography variant="body2">{ruleset.additionalNexusCriteria}</Typography>
          </Box>
        )}
        {ruleset.authoritativeSource && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Authoritative Source</Typography>
            {ruleset.citation_url ? (
              <Link href={ruleset.citation_url} target="_blank" rel="noopener noreferrer">
                {ruleset.authoritativeSource}
              </Link>
            ) : (
              <Typography variant="body2">{ruleset.authoritativeSource}</Typography>
            )}
          </Box>
        )}
        {ruleset.notes && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Notes</Typography>
            <Typography variant="body2">{ruleset.notes}</Typography>
          </Box>
        )}
      </Box>
    );
  };

  // helper to render edit form fields
  const renderEditFields = (type: 'serviceBased' | 'nonServiceBased') => {
    const data = editForm[type];
    return (
      <Box>
        <TextField
          label="Dollar Nexus Threshold"
          name="dollarNexusThreshold"
          multiline
          rows={2}
          value={data.dollarNexusThreshold || ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Physical Presence"
          name="physicalPresence"
          multiline
          rows={2}
          value={data.physicalPresence || ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Additional Nexus Criteria"
          name="additionalNexusCriteria"
          multiline
          rows={2}
          value={data.additionalNexusCriteria || ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Authoritative Source"
          name="authoritativeSource"
          value={data.authoritativeSource || ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Citation URL"
          name="citation_url"
          value={data.citation_url || ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Income Threshold"
          name="income_threshold"
          type="number"
          value={data.income_threshold ?? ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Employee Count"
          name="employee_count"
          type="number"
          value={data.employee_count ?? ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Property Value"
          name="property_value"
          type="number"
          value={data.property_value ?? ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Notes"
          name="notes"
          multiline
          rows={3}
          value={data.notes || ''}
          onChange={e => handleInputChange(e, type)}
          fullWidth
          margin="normal"
        />
      </Box>
    );
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5">{state.state}</Typography>
        {onClose && <Button onClick={onClose}>Close</Button>}
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Service-Based" />
          <Tab label="Product-Based" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          {renderRuleset(state.serviceBased)}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {renderRuleset(state.nonServiceBased)}
        </TabPanel>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" fontWeight="bold" component="span">
          Last updated:{' '}
        </Typography>
        <Typography variant="body2" component="span">
          {new Date(state.last_updated).toLocaleDateString()}
        </Typography>
      </Box>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Tooltip title="Compare with others">
          <Button onClick={handleAddToCompare} startIcon={<CompareIcon />}>
            Compare
          </Button>
        </Tooltip>
        <Button variant="contained" startIcon={<EditIcon />} onClick={handleEditDialogOpen}>
          Edit
        </Button>
      </Box>

      <Dialog open={editDialogOpen} onClose={handleEditDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>Edit {state.state}</DialogTitle>
        <DialogContent dividers>
          {submitStatus === 'error' && (
            <Typography color="error" sx={{ mb: 2 }}>{errorMessage}</Typography>
          )}
          {submitStatus === 'success' && (
            <Typography color="primary" sx={{ mb: 2 }}>Saved successfully!</Typography>
          )}

          <Tabs value={editTabValue} onChange={handleEditTabChange}>
            <Tab label="Service-Based" />
            <Tab label="Product-Based" />
          </Tabs>
          <TabPanel value={editTabValue} index={0}>
            {renderEditFields('serviceBased')}
          </TabPanel>
          <TabPanel value={editTabValue} index={1}>
            {renderEditFields('nonServiceBased')}
          </TabPanel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} disabled={submitStatus === 'loading'}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={submitStatus === 'loading' || submitStatus === 'success'}
          >
            {submitStatus === 'loading' ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default StateDetail; 