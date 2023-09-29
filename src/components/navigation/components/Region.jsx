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
    const { region, setRegion, } = useMap()
    const [inputValue, setInputValue] = React.useState('');

    return (
        <ComboBox
            onChange={(event, newValue) => { setRegion(newValue) }}
            onInputChange={(event, newInputValue) => { setInputValue(newInputValue) }}
            renderInput={(params) => <TextField {...params} label="Select Region" />}
            value={region}
            inputValue={inputValue}
            options={options}
            sx={{ width: 230 }}
            size="small"
        />
    );
}

