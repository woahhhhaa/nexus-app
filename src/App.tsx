import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import USMap from './components/USMap';
import FilterPanel from './components/FilterPanel';
import StateDetail from './components/StateDetail';
import NexusCalculator from './components/NexusCalculator';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import StateComparison from './components/StateComparison';
import { AuthProvider } from './contexts/AuthContext';
import { NexusProvider } from './contexts/NexusContext';
import { useNexus } from './contexts/NexusContext';

function HomePage() {
  const { selectedState, setSelectedState } = useNexus();

  return (
    <Box sx={{ 
      display: 'flex', 
      height: 'calc(100vh - 64px)',
      overflow: 'hidden' // Prevent scrollbars on the main container
    }}>
      <Box sx={{ 
        flexShrink: 0, // Prevent the filter panel from shrinking
        borderRight: '1px solid #e0e0e0',
        bgcolor: '#fafafa'
      }}>
        <FilterPanel />
      </Box>
      <Box sx={{ 
        flexGrow: 1, // Allow the map to take up remaining space
        position: 'relative',
        overflow: 'hidden' // Prevent scrollbars on the map container
      }}>
        <USMap />
      </Box>
      {selectedState && (
        <Box sx={{ 
          width: 400, 
          overflowY: 'auto', 
          borderLeft: '1px solid #e0e0e0',
          bgcolor: '#ffffff',
          boxShadow: '-2px 0 10px rgba(0,0,0,0.05)'
        }}>
          <StateDetail
            state={selectedState}
            onClose={() => setSelectedState(null)}
          />
        </Box>
      )}
    </Box>
  );
}

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <NexusProvider useSampleData={true}>
          <Router>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/calculator" element={<NexusCalculator />} />
                  <Route path="/compare" element={<StateComparison />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/signup" element={<SignupForm />} />
                  
                  {/* Fallback Route */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Box>
            </Box>
          </Router>
        </NexusProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;