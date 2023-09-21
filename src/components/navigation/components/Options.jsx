import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Options() {
    return (
        <Autocomplete
            disablePortal
            id="option"
            options={option}
            sx={{ width: 200 }}
            size='small'
            renderInput={(params) => <TextField {...params} label="Select Region" />}
        />
    );
}

const option = [
    { label: 'World' },
    { label: 'Liberia' },
];