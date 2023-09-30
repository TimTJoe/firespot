import styled from "@emotion/styled"
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { RxCrossCircled, RxShare2, RxClock, RxInfoCircled } from "react-icons/rx"


const Details = ({ details }) => {
    return <Box>
        <List disablePadding>
            <ListItem>
                <ListItemIcon>
                    <RxClock />
                </ListItemIcon>
                <ListItemText
                    primary="Monsterrado County"
                    secondary="Location" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <RxInfoCircled />
                </ListItemIcon>
                <ListItemText
                    primary="Active Fire"
                    secondary="Status" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <RxInfoCircled />
                </ListItemIcon>
                <ListItemText
                    primary="5 Minutes ago"
                    secondary="Capture Time" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <RxInfoCircled />
                </ListItemIcon>
                <ListItemText
                    primary="[-23.0454, 23.0908]"
                    secondary="Coordinate" />
            </ListItem>
        </List>
    </Box>
}

export default Details