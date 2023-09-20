import { ComboBox, Item } from "@adobe/react-spectrum";
import React, { useState } from "react"



let options = [
    { name: 'Liberia' },
    { name: 'Sierra Leone' },
    { name: 'Ghana' },
    { name: 'Mali' },
    { name: 'Togo' },
    { name: 'Benin' },
    { name: 'Niger' },
    { name: 'Chad' }
];



const Country = () => {
    let [value, setValue] = useState('Liberia');
    return (
        <ComboBox
            defaultItems={options}
            inputValue={value}
            onInputChange={setValue}
        >
            {(item) => <Item key={item.name}>{item.name}</Item>}
        </ComboBox>
    )
}

export default Country