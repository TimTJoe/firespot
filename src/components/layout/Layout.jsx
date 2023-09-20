import { View } from "@adobe/react-spectrum"
import Navigation from "@components/navigation"

const Layout = ({ children }) => {
    return (
        <View
            position={"relative"}
        >
            <Navigation />
            {children}
        </View>
    )
}

export default Layout