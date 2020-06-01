import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import { SafeAreaView } from "react-navigation"
import { requestPermissionsAsync } from "expo-location"
import Map from "../components/Map"

const TrackCreateScreen = () => {
    const [ error, setError ] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
        } catch(error) {
            setError(error)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Text h2>Create a Track</Text>
            <Map />
            {error ? <Text>Please enable location services.</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen