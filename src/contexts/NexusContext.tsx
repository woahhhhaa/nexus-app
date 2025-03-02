import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAllStatesData } from '../services/nexusService';
import { nexusData } from '../data/nexusData';
import { NexusData, NexusRuleset } from '../types';

interface FilterOptions {
  selectedStates?: string[];
}

/**
 * Context shape for managing Nexus data and UI states
 */
interface NexusContextType {
  statesData: NexusData[];
  filteredStates: NexusData[];
  selectedState: NexusData | null;
  filterOptions: FilterOptions;
  loading: boolean;
  error: string | null;

  setSelectedState: (state: NexusData | null) => void;
  updateFilterOptions: (options: Partial<FilterOptions>) => void;
  refreshData: () => Promise<void>;
  getStateByName: (name: string) => NexusData | undefined;

  // Controls whether we show service-based rules or product-based rules globally
  isServiceBased: boolean;
  setIsServiceBased: (val: boolean) => void;

  // If needed, get active ruleset for a single state:
  getActiveRuleset: (state: NexusData) => NexusRuleset;
}

const NexusContext = createContext<NexusContextType | undefined>(undefined);

export const useNexus = (): NexusContextType => {
  const context = useContext(NexusContext);
  if (!context) {
    throw new Error('useNexus must be used within a NexusProvider');
  }
  return context;
};

interface NexusProviderProps {
  children: ReactNode;
  useSampleData?: boolean;
}

/**
 * The NexusProvider loads all state data from Firestore,
 * and allows toggling between service-based vs. product-based views.
 */
export const NexusProvider: React.FC<NexusProviderProps> = ({ children, useSampleData = false }) => {
  const [statesData, setStatesData] = useState<NexusData[]>([]);
  const [filteredStates, setFilteredStates] = useState<NexusData[]>([]);
  const [selectedState, setSelectedState] = useState<NexusData | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Toggle for user business type globally
  const [isServiceBased, setIsServiceBased] = useState(true);

  // Load data on mount
  useEffect(() => {
    refreshData();
    // eslint-disable-next-line
  }, [useSampleData]);

  // Recompute filtered states whenever filterOptions or statesData changes
  useEffect(() => {
    const selected = filterOptions.selectedStates || [];
    if (selected.length === 0) {
      setFilteredStates([]);
    } else {
      const subset = statesData.filter(s => selected.includes(s.state));
      setFilteredStates(subset);
    }
  }, [filterOptions, statesData]);

  const refreshData = async () => {
    setLoading(true);
    setError(null);

    try {
      // If the user wants sample data, implement here, otherwise fetch from Firestore
      if (useSampleData) {
        // Use the imported nexusData
        setStatesData(nexusData);
      } else {
        const data = await getAllStatesData();
        setStatesData(data);
      }
    } catch (err) {
      console.error('Failed fetching data:', err);
      setError('Failed to fetch nexus data');
    } finally {
      setLoading(false);
    }
  };

  const updateFilterOptions = (options: Partial<FilterOptions>) => {
    setFilterOptions(prev => ({ ...prev, ...options }));
  };

  const getStateByName = (name: string): NexusData | undefined => {
    return statesData.find(s => s.state === name);
  };

  const getActiveRuleset = (state: NexusData): NexusRuleset => {
    return isServiceBased ? state.serviceBased : state.nonServiceBased;
  };

  const value: NexusContextType = {
    statesData,
    filteredStates,
    selectedState,
    filterOptions,
    loading,
    error,
    setSelectedState,
    updateFilterOptions,
    refreshData,
    getStateByName,

    isServiceBased,
    setIsServiceBased,
    getActiveRuleset
  };

  return (
    <NexusContext.Provider value={value}>
      {children}
    </NexusContext.Provider>
  );
}; 