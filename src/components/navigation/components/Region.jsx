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
    const [inputValue, setInputValue] = React.useState('');

    return (
        <ComboBox
            value={region}
            onChange={(event, newValue) => {
                setRegion(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            options={options}
            sx={{ width: 230 }}
            size="small"
            renderInput={(params) => <TextField {...params} label="Select Region" />}
        />
    );
}

