import { View } from "@adobe/react-spectrum"
import Navigation from "@components/navigation"
import Map from "@components/Map"

const Layout = ({ children }) => {
    return (
        <View
            position={"relative"}
        >
            <Navigation />
            <Map />
        </View>
    )
}

export default Layout