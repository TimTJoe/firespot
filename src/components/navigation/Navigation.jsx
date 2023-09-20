import { ActionGroup, Item, Text, View } from "@adobe/react-spectrum"
import Settings from "@spectrum-icons/workflow/Settings"
import More from "@spectrum-icons/workflow/MoreVertical"
import Counties from "./components/Counties"
import Refresh from "./components/Refresh"
import Filter from "./components/Filter"

const Navigation = () => {
    return (
        <ActionGroup
            position={"absolute"}
            margin={"auto 38%"}
            top={"size-150"}
            zIndex={9000}
            minWidth={"size-1000"}
            overflowMode="collapse"
        >
            <Item>
                <Refresh />
            </Item>
            <Item>
                <Counties />
            </Item>
            <Item>
                <Filter />
            </Item>
        </ActionGroup>
    )
}

export default Navigation