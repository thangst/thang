import React from 'react';
import { useColorScheme } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ width: 100 }}> 
      <Select
        value={mode}
        onChange={handleChange}
        sx={{ 
          height: 35, // 
          '.MuiSelect-select': { // Style cho select content
            py: 0.5, // Giảm padding
          }
        }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;