import { useState } from 'react';
import { NexusData, CalculatorInput } from '../types';

/**
 * Represents the result from the calculator for a single state.
 */
interface CalculatorResult {
  state: string;
  hasNexus: boolean;
  reasons: string[];
}

/**
 * Provide a custom hook that stores calculator inputs and does nexus checks
 * based on each state's serviceBased or nonServiceBased ruleset.
 */
export const useNexusCalculator = (statesData: NexusData[]) => {
  const [inputs, setInputs] = useState<CalculatorInput[]>([]);
  const [results, setResults] = useState<CalculatorResult[]>([]);

  const noIncomeTaxStates = ['Nevada', 'Wyoming', 'South Dakota'];

  // Add a state to the calculator if not already present
  const addState = (state: string) => {
    if (!inputs.some(input => input.state === state)) {
      setInputs(prev => [
        ...prev,
        {
          state,
          income: 0,
          employees: 0,
          property: 0,
          transactions: 0,
          totalSales: 0,
          totalProperty: 0,
          totalPayroll: 0,
          isServiceBased: true // default
        }
      ]);
    }
  };

  // Remove an existing state from inputs
  const removeState = (state: string) => {
    setInputs(prev => prev.filter(input => input.state !== state));
    setResults(prev => prev.filter(r => r.state !== state));
  };

  // Update an input field for a specific state
  const updateInput = (state: string, field: keyof CalculatorInput, value: number | boolean) => {
    setInputs(prev => 
      prev.map(input => {
        if (input.state === state) {
          return { ...input, [field]: value };
        }
        return input;
      })
    );
  };

  // Evaluate nexus for all states in the inputs
  const calculateNexus = () => {
    const newResults: CalculatorResult[] = [];

    inputs.forEach(input => {
      // Look up the state's data
      const stateData = statesData.find(s => s.state === input.state);
      if (!stateData) {
        newResults.push({
          state: input.state,
          hasNexus: false,
          reasons: ['No data for this state in Firestore']
        });
        return;
      }

      // Pick which ruleset to use
      const ruleset = input.isServiceBased ? stateData.serviceBased : stateData.nonServiceBased;
      if (!ruleset) {
        newResults.push({
          state: input.state,
          hasNexus: false,
          reasons: [
            `${input.isServiceBased ? 'serviceBased' : 'nonServiceBased'} is not defined in this state doc.`
          ]
        });
        return;
      }

      // Start logic
      let hasNexus = false;
      const reasons: string[] = [];
      const businessType = input.isServiceBased ? 'service-based' : 'product-based';

      // If no CIT, skip
      if (noIncomeTaxStates.includes(input.state)) {
        reasons.push(`No corporate income tax in ${input.state}.`);
        newResults.push({ state: input.state, hasNexus: false, reasons });
        return;
      }

      // 1) numeric thresholds
      if (ruleset.income_threshold && input.income >= ruleset.income_threshold) {
        hasNexus = true;
        reasons.push(
          `Income $${input.income} >= ${businessType} threshold $${ruleset.income_threshold}`
        );
      }
      if (ruleset.employee_count && input.employees >= ruleset.employee_count) {
        hasNexus = true;
        reasons.push(
          `Employees ${input.employees} >= ${businessType} threshold ${ruleset.employee_count}`
        );
      }
      if (ruleset.property_value && input.property >= ruleset.property_value) {
        hasNexus = true;
        reasons.push(
          `Property $${input.property} >= ${businessType} threshold $${ruleset.property_value}`
        );
      }

      // 2) Transaction-based triggers (Hawaii, New Jersey, etc.)
      if (['Hawaii', 'New Jersey'].includes(input.state) && input.transactions >= 200) {
        hasNexus = true;
        reasons.push(`≥ 200 transactions in ${input.state} triggers economic nexus.`);
      }

      // 3) Factor presence (25% rule)
      if (input.totalSales && input.totalSales > 0) {
        const ratio = input.income / input.totalSales;
        if (ratio >= 0.25) {
          hasNexus = true;
          reasons.push(`In-state sales are ${Math.round(ratio * 100)}% of total => 25% factor presence.`);
        }
      }
      // Repeat for property or payroll if needed

      // 4) If the textual field indicates no threshold, treat any activity as nexus
      if (!hasNexus && ruleset.dollarNexusThreshold) {
        const lower = ruleset.dollarNexusThreshold.toLowerCase();
        if (
          lower.includes('none') ||
          lower.includes('no threshold') ||
          lower.includes('no specific') ||
          lower.match(/no\s?bright-line/)
        ) {
          if (input.income > 0 || input.employees > 0 || input.property > 0) {
            hasNexus = true;
            reasons.push(`No specified threshold, and you have in-state activity => nexus likely.`);
          }
        }
      }

      // 5) If still no nexus found, disclaim that we might be under thresholds
      if (!hasNexus) {
        reasons.push(`Below known thresholds for ${businessType}. Check the "Additional Nexus Criteria".`);
      }

      newResults.push({ state: input.state, hasNexus, reasons });
    });

    setResults(newResults);
    return newResults;
  };

  const clearCalculator = () => {
    setInputs([]);
    setResults([]);
  };

  return {
    inputs,
    results,
    addState,
    removeState,
    updateInput,
    calculateNexus,
    clearCalculator
  };
}; 