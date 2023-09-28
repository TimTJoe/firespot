import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from '@emotion/styled';
import { useMap } from '@providers/ProvideMap';


const ComboBox = styled(Autocomplete)`
    width: 200px;
    div.MuiInputBase-root {
        font-weight: 600;
        border-radius: unset;
    }`

const options = ["Global", "Africa", "Liberia", "USA", "Canada"]

export default function Region() {
    const { region, setRegion } = useMap()

    return (
        <ComboBox
            value={region}
            options={options}
            size="small"
            sx={{ width: 250 }}
            onChange={(event, newValue) => { setRegion(newValue) }}
            renderInput={(params) => <TextField {...params} label="Select Region" />}
        />
    );
}

