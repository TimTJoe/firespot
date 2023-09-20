import { ComboBox, Item } from "@adobe/react-spectrum";
import React, { useState } from "react"
// import AllCounties from "@data/counties.json"

const AllCounties = [
    { name: "Bomi" },
    { name: "Bong" },
    { name: "Gbarpolu" },
    { name: "Grand Bassa" },
    { name: "Grand Cape Mount" },
    { name: "Grand Gedeh" },
    { name: "Grand Kru" },
    { name: "Lofa" },
    { name: "Margibi" },
    { name: "Maryland" },
    { name: "Montserrado" },
    { name: "Nimba" },
    { name: "River Cess" },
    { name: "River Gee" },
    { name: "Sinoe" }
]

const Counties = () => {
    let [value, setValue] = useState('Monsterrado');
    return (
        <ComboBox
            defaultItems={AllCounties}
            inputValue={value}
            onInputChange={setValue}
        >
            {(item) => <Item key={item.name}>{item.name}</Item>}
        </ComboBox>
    )
}

export default Counties