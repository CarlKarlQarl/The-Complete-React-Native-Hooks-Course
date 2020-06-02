import "../_mockLocation"
import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import { SafeAreaView, withNavigationFocus } from "react-navigation"
import Spacer from "../components/Spacer"
import Map from "../components/Map"
import useLocation from "../hooks/useLocation"
import { Context as LocationContext } from "../context/LocationContext"


const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext)
    const [ error ] = useLocation(isFocused, addLocation)

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Spacer>
                <Text h2>Create a Track</Text>
            </Spacer>
            <Map />
            {error ? <Text>Please enable location services.</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)