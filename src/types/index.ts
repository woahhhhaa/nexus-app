/**
 * Ruleset for nexus criteria
 */
export interface NexusRuleset {
  income_threshold: number | null;
  employee_count: number | null;
  property_value: number | null;
  dollarNexusThreshold?: string;
  physicalPresence?: string;
  additionalNexusCriteria?: string;
  authoritativeSource?: string;
  citation_url?: string;
  notes?: string;
}

/**
 * Basic data model for a state's nexus info
 *
 * Option B: Remove legacy fields (income_threshold, etc.) from the top level.
 * All nexus fields reside in the serviceBased and nonServiceBased sub-objects.
 */
export interface NexusData {
  state: string;
  last_updated: string;
  contributor_id: string;
  serviceBased: NexusRuleset;
  nonServiceBased: NexusRuleset;
  
  // Legacy properties for backward compatibility with USMap
  dollarNexusThreshold?: string;
  physicalPresence?: string;
  additionalNexusCriteria?: string;
  authoritativeSource?: string;
  citation_url?: string;
}

/**
 * Basic User type
 */
export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  isAdmin?: boolean;
}

/**
 * Calculator input type
 */
export interface CalculatorInput {
  state: string;
  income: number;
  employees: number;
  property: number;
  transactions: number;
  totalSales?: number;
  totalProperty?: number;
  totalPayroll?: number;
  isServiceBased?: boolean; // Toggle for service vs product
} 