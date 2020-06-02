import "../_mockLocation"
import React, { useEffect, useState, useContext } from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import { SafeAreaView } from "react-navigation"
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location"
import Spacer from "../components/Spacer"
import Map from "../components/Map"
import { Context as LocationContext } from "../context/LocationContext"


const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext)
    const [ error, setError ] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                addLocation(location)
            })
        } catch(error) {
            setError(error)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

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

export default TrackCreateScreen