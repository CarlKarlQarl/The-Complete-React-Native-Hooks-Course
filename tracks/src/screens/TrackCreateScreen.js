// import "../_mockLocation"
import React, { useContext, useCallback } from "react"
import { StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import { SafeAreaView, withNavigationFocus } from "react-navigation"
import Spacer from "../components/Spacer"
import Map from "../components/Map"
import TrackForm from "../components/TrackForm"
import useLocation from "../hooks/useLocation"
import { Context as LocationContext } from "../context/LocationContext"


const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [ error ] = useLocation(isFocused || recording, callback)

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Spacer>
                <Text h2>Create a Track</Text>
            </Spacer>
            <Map />
            {error ? <Text>Please enable location services.</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)