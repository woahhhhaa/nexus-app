import React, { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  CircularProgress,
  TextField,
  IconButton,
  Tooltip,
  Divider,
  FormControlLabel,
  Switch
} from '@mui/material';
import { FilterAlt as FilterIcon, Clear as ClearIcon } from '@mui/icons-material';
import { useNexus } from '../contexts/NexusContext';
import { NexusData } from '../types';

/**
 * A filter panel that also toggles service vs. product-based view.
 */
const FilterPanel: React.FC = () => {
  const {
    statesData,
    filterOptions,
    updateFilterOptions,
    loading,
    error,
    isServiceBased,
    setIsServiceBased
  } = useNexus();

  const [searchValue, setSearchValue] = useState('');

  // auto-select all states on mount
  useEffect(() => {
    if (statesData.length > 0 && (!filterOptions.selectedStates || filterOptions.selectedStates.length === 0)) {
      const all = statesData.map((s: NexusData) => s.state);
      updateFilterOptions({ selectedStates: all });
    }
    // eslint-disable-next-line
  }, [statesData]);

  const toggleSelectedState = (state: string) => {
    const sel = filterOptions.selectedStates || [];
    if (sel.includes(state)) {
      // remove it
      updateFilterOptions({ selectedStates: sel.filter((s: string) => s !== state) });
    } else {
      updateFilterOptions({ selectedStates: [...sel, state] });
    }
  };

  const selectAll = useCallback(() => {
    updateFilterOptions({ selectedStates: statesData.map((s: NexusData) => s.state) });
  }, [statesData, updateFilterOptions]);

  const clearAll = useCallback(() => {
    updateFilterOptions({ selectedStates: [] });
  }, [updateFilterOptions]);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsServiceBased(e.target.checked);
  };

  const filteredStates = statesData
    .map((s: NexusData) => s.state)
    .filter((st: string) => st.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Paper sx={{ p: 2, width: 300, height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FilterIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6">Filter States</Typography>
      </Box>

      <FormControlLabel
        control={
          <Switch
            checked={isServiceBased}
            onChange={handleToggle}
            color="primary"
          />
        }
        label={isServiceBased ? 'Service-Based' : 'Product-Based'}
        sx={{ mb: 2 }}
      />
      <Divider sx={{ mb: 2 }} />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ p: 2, bgcolor: 'error.light', borderRadius: 1 }}>
          <Typography color="error.dark">{error}</Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Search states..."
              size="small"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: <FilterIcon sx={{ mr: 1 }} fontSize="small" />,
                endAdornment: searchValue ? (
                  <IconButton size="small" onClick={() => setSearchValue('')}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                ) : null
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {(filterOptions.selectedStates?.length || 0)} of {statesData.length} selected
            </Typography>
            <Box>
              <Button variant="outlined" size="small" onClick={clearAll} disabled={!filterOptions.selectedStates?.length}>
                Clear
              </Button>
            </Box>
          </Box>

          <Tooltip title="Shortcut: Ctrl+A / Cmd+A to select all">
            <Button
              variant="contained"
              onClick={selectAll}
              disabled={filterOptions.selectedStates?.length === statesData.length}
              sx={{ mb: 2 }}
            >
              Select All
            </Button>
          </Tooltip>

          <Box sx={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {filteredStates.map((st: string) => {
              const selected = filterOptions.selectedStates?.includes(st);
              return (
                <Chip
                  key={st}
                  label={st}
                  color={selected ? 'primary' : 'default'}
                  variant={selected ? 'filled' : 'outlined'}
                  onClick={() => toggleSelectedState(st)}
                  sx={{ m: '2px' }}
                />
              );
            })}
          </Box>
        </>
      )}
    </Paper>
  );
};

export default FilterPanel;