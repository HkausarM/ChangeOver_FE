import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';


export default function BasicSelect() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div class="cat-filter">
      <Box sx={{ minWidth: 190 }}>
        <Select
          displayEmpty
          renderValue={() => {
            return (
              <Box sx={{ display: "flex", gap: 1 }}>
                <FilterListIcon />
                {category}
              </Box>
            );
          }}
          onChange={handleChange}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Kids"}>Kids</MenuItem>
        </Select>
      </Box>
    </div>
  );
}