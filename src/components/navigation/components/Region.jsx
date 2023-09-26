import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from '@emotion/styled';


const ComboBox = styled(Autocomplete)`
    width: 200px;
    div.MuiInputBase-root {
        font-weight: 600;
        border-radius: unset;
    }
`

export default function Region() {
    return (
        <ComboBox
            disablePortal
            id="option"
            options={regions}
            size='small'
            renderInput={(params) => <TextField {...params} label="Select Region" />}
        />
    );
}

const regions = [
    { label: 'World', id: 1 },
    { label: 'Africa', id: 2 },
    { label: 'West Africa', id: 3 },
];