import React, { useState, useEffect } from 'react';
import { 
  Paper, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Autocomplete, 
  Grid, 
  Card, 
  CardContent, 
  Divider,
  IconButton,
  Alert,
  Chip,
  FormControlLabel,
  Switch
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon, Calculate as CalculateIcon } from '@mui/icons-material';
import { useNexus } from '../contexts/NexusContext';
import { useNexusCalculator } from '../hooks/useNexusCalculator';
import { CalculatorInput } from '../types';

const NexusCalculator: React.FC = () => {
  const { statesData, isServiceBased } = useNexus();
  const { 
    inputs, 
    results, 
    addState, 
    removeState, 
    updateInput, 
    calculateNexus, 
    clearCalculator 
  } = useNexusCalculator(statesData);

  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  // Keep each row's isServiceBased in sync with global isServiceBased
  useEffect(() => {
    inputs.forEach(input => {
      if (input.isServiceBased !== isServiceBased) {
        updateInput(input.state, 'isServiceBased', isServiceBased);
      }
    });
    // eslint-disable-next-line
  }, [isServiceBased]);

  const handleAddState = () => {
    if (selectedState) {
      addState(selectedState);
      setSelectedState(null);
    }
  };

  const handleRemoveState = (st: string) => {
    removeState(st);
  };

  const handleInputChange = (
    st: string,
    field: keyof Omit<CalculatorInput, 'state'>, 
    val: string
  ) => {
    const numeric = val === '' ? 0 : Number(val);
    updateInput(st, field, numeric);
  };

  const handleToggle = (st: string, checked: boolean) => {
    updateInput(st, 'isServiceBased', checked);
  };

  const handleCalculate = () => {
    calculateNexus();
    setHasCalculated(true);
  };

  const handleClear = () => {
    clearCalculator();
    setHasCalculated(false);
  };

  const allStateNames = statesData.map(s => s.state);

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Nexus Calculator
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        This helps you see if you likely have nexus in each state. It uses the service-based or product-based thresholds as configured.
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        Calculations are informational, not definitive tax advice. Always consult a professional for specifics.
      </Alert>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Autocomplete
          value={selectedState}
          onChange={(_, newVal) => setSelectedState(newVal)}
          options={allStateNames.filter(s => !inputs.some(i => i.state === s))}
          renderInput={(params) => <TextField {...params} label="Select a State" />}
          sx={{ width: 300 }}
        />
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          disabled={!selectedState}
          onClick={handleAddState}
        >
          Add State
        </Button>
      </Box>

      {inputs.length === 0 ? (
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">
            No states added yet. Select a state above to begin.
          </Typography>
        </Box>
      ) : (
        <>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {inputs.map(input => (
              <Grid item xs={12} md={6} lg={4} key={input.state}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="h6">{input.state}</Typography>
                      <IconButton size="small" onClick={() => handleRemoveState(input.state)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>

                    <FormControlLabel
                      control={
                        <Switch
                          checked={!!input.isServiceBased}
                          onChange={(e) => handleToggle(input.state, e.target.checked)}
                        />
                      }
                      label={input.isServiceBased ? 'Service-Based' : 'Product-Based'}
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      label="Income ($)"
                      type="number"
                      margin="normal"
                      fullWidth
                      value={input.income}
                      onChange={(e) => handleInputChange(input.state, 'income', e.target.value)}
                    />
                    <TextField
                      label="Employees"
                      type="number"
                      margin="normal"
                      fullWidth
                      value={input.employees}
                      onChange={(e) => handleInputChange(input.state, 'employees', e.target.value)}
                    />
                    <TextField
                      label="Property ($)"
                      type="number"
                      margin="normal"
                      fullWidth
                      value={input.property}
                      onChange={(e) => handleInputChange(input.state, 'property', e.target.value)}
                    />
                    <TextField
                      label="Transactions (#)"
                      type="number"
                      margin="normal"
                      fullWidth
                      value={input.transactions}
                      onChange={(e) => handleInputChange(input.state, 'transactions', e.target.value)}
                    />
                    <TextField
                      label="Total Sales (Worldwide)"
                      type="number"
                      margin="normal"
                      fullWidth
                      value={input.totalSales ?? ''}
                      onChange={(e) => handleInputChange(input.state, 'totalSales', e.target.value)}
                    />
                    <TextField
                      label="Total Property (Worldwide)"
                      type="number"
                      margin="normal"
                      fullWidth
                      value={input.totalProperty ?? ''}
                      onChange={(e) => handleInputChange(input.state, 'totalProperty', e.target.value)}
                    />
                    <TextField
                      label="Total Payroll (Worldwide)"
                      type="number"
                      margin="normal"
                      fullWidth
                      value={input.totalPayroll ?? ''}
                      onChange={(e) => handleInputChange(input.state, 'totalPayroll', e.target.value)}
                    />

                    {hasCalculated && (
                      <Box sx={{ mt: 2 }}>
                        <Divider sx={{ mb: 1 }} />
                        {results.find(r => r.state === input.state)?.hasNexus ? (
                          <Chip label="Nexus Likely" color="warning" sx={{ mr: 1, mb: 1 }} />
                        ) : (
                          <Chip label="No Nexus Detected" color="success" sx={{ mr: 1, mb: 1 }} />
                        )}

                        {(results.find(r => r.state === input.state)?.reasons || []).map((reason, idx) => (
                          <Typography variant="body2" key={idx}>• {reason}</Typography>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              startIcon={<CalculateIcon />}
              onClick={handleCalculate}
            >
              Calculate
            </Button>
            <Button variant="outlined" onClick={handleClear}>
              Clear
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default NexusCalculator; 