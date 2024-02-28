import './Dropdown.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SportsSoccer, School, PeopleAlt, SportsEsports, MedicationLiquid, Rocket} from '@mui/icons-material/';


const Dropdown = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <header>
        <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Options</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={"Education"}>Education <School/></MenuItem>
            <MenuItem value={"Science"}>Science <Rocket/></MenuItem>
            <MenuItem value={"Art"}>Art <PeopleAlt/></MenuItem>
            <MenuItem value={"Sport"}>Sport <SportsSoccer/></MenuItem>
            <MenuItem value={"Games"}>Games <SportsEsports/></MenuItem>
            <MenuItem value={"Health"}>Health <MedicationLiquid/></MenuItem>
            </Select>
        </FormControl>
        </Box>
        </header>
    
    );

};
export default Dropdown;