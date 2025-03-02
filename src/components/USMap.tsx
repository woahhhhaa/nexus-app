import React, { useState, memo, useRef } from 'react';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  ZoomableGroup 
} from 'react-simple-maps';
import { 
  Box, 
  Typography, 
  Paper, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material';
import { 
  Compare as CompareIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import { NexusData } from '../types';
import { useNexus } from '../contexts/NexusContext';
import { useNavigate } from 'react-router-dom';

// URL to the US map TopoJSON
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface USMapProps {
  onStateClick?: (state: NexusData) => void;
}

const USMap: React.FC<USMapProps> = ({ onStateClick }) => {
  const { filteredStates, statesData, setSelectedState } = useNexus();
  const [tooltipContent, setTooltipContent] = useState<{ state: string; x: number; y: number } | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
    state: string;
  } | null>(null);
  const navigate = useNavigate();

  // Format the nexus data for display in tooltip
  const formatNexusData = (state: string): React.ReactNode => {
    const stateData = statesData.find(s => s.state === state);
    
    if (!stateData) {
      return <Typography>No data available</Typography>;
    }

    return (
      <>
        <Typography variant="subtitle1" fontWeight="bold">{state}</Typography>
        
        {stateData.dollarNexusThreshold && (
          <Typography variant="body2">
            <strong>Threshold:</strong> {stateData.dollarNexusThreshold}
          </Typography>
        )}

        {stateData.physicalPresence && (
          <Typography variant="body2">
            <strong>Physical Presence:</strong> {stateData.physicalPresence}
          </Typography>
        )}

        {stateData.additionalNexusCriteria && (
          <Typography variant="body2">
            <strong>Additional Criteria:</strong> {stateData.additionalNexusCriteria}
          </Typography>
        )}

        {stateData.authoritativeSource && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {stateData.citation_url ? (
              <a
                href={stateData.citation_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontStyle: 'italic' }}
              >
                {stateData.authoritativeSource}
              </a>
            ) : (
              <em>{stateData.authoritativeSource}</em>
            )}
          </Typography>
        )}

        <Typography variant="caption" color="text.secondary">
          Last updated: {stateData.last_updated}
        </Typography>
      </>
    );
  };

  // Get the fill color for a state based on whether it's in the filtered list
  const getStateFill = (geo: any): string => {
    const state = geo.properties.name;
    const isSelected = filteredStates.some(s => s.state === state);
    return isSelected ? "#1976d2" : "#ffffff";
  };

  const handleContextMenu = (event: React.MouseEvent, stateName: string) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX,
            mouseY: event.clientY,
            state: stateName,
          }
        : null,
    );
  };

  const handleContextMenuClose = () => {
    setContextMenu(null);
  };

  const handleAddToComparison = () => {
    if (contextMenu) {
      navigate(`/compare?states=${contextMenu.state}`);
      handleContextMenuClose();
    }
  };

  const handleViewDetails = () => {
    if (contextMenu) {
      const stateData = statesData.find(s => s.state === contextMenu.state);
      if (stateData) {
        setSelectedState(stateData);
        if (onStateClick) {
          onStateClick(stateData);
        }
      }
      handleContextMenuClose();
    }
  };

  return (
    <Box 
      sx={{ position: 'relative', width: '100%', height: '500px' }}
      onContextMenu={(e) => e.preventDefault()} // Prevent default context menu on the map
    >
      <ComposableMap projection="geoAlbersUsa" style={{ width: '100%', height: '100%' }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const stateName = geo.properties.name;
                const stateData = statesData.find(s => s.state === stateName);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getStateFill(geo)}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: "#3f51b5", outline: 'none', cursor: 'pointer' },
                      pressed: { fill: "#1a237e", outline: 'none' }
                    }}
                    onMouseEnter={(evt) => {
                      const { clientX, clientY } = evt;
                      setTooltipContent({
                        state: stateName,
                        x: clientX,
                        y: clientY
                      });
                    }}
                    onMouseLeave={() => {
                      setTooltipContent(null);
                    }}
                    onClick={() => {
                      if (stateData && onStateClick) {
                        onStateClick(stateData);
                      }
                      if (stateData) {
                        setSelectedState(stateData);
                      }
                    }}
                    onContextMenu={(evt) => {
                      if (stateData) {
                        handleContextMenu(evt, stateName);
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      
      {tooltipContent && (
        <Paper
          elevation={3}
          sx={{
            position: 'fixed',
            left: tooltipContent.x + 10,
            top: tooltipContent.y + 10,
            zIndex: 1000,
            padding: 2,
            maxWidth: 250,
            pointerEvents: 'none'
          }}
        >
          {formatNexusData(tooltipContent.state)}
        </Paper>
      )}

      <Menu
        open={contextMenu !== null}
        onClose={handleContextMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleViewDetails}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>View Details</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleAddToComparison}>
          <ListItemIcon>
            <CompareIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add to Comparison</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default memo(USMap); 