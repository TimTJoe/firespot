import { Item, Menu, MenuTrigger, ActionButton, Text } from "@adobe/react-spectrum"
import Properties from "@spectrum-icons/workflow/Properties"
import React, { useState } from "react";


const Filter = () => {
    let [selected, setSelected] = useState(new Set(['All']));

    let menuItems = [
        { name: 'All' },
        { name: 'Active Fire' },
        { name: 'Hotspot' },
        { name: 'Last 24 Hours' },
        { name: 'This Week' }
    ];

    return (
        <MenuTrigger>
            <ActionButton>
                <Properties />
                <Text>
                    {selected}
                </Text>
            </ActionButton>
            <Menu
                items={menuItems}
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                {item => <Item key={item.name}>{item.name}</Item>}
            </Menu>
        </MenuTrigger>
    )
}

export default Filter