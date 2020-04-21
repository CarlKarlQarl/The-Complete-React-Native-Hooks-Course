import React from "react"
import { Text, View, StyleSheet } from "react-native"

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: "black",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    textOneStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "pink"
    },
    textTwoStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: "green",
        backgroundColor: "lightgreen",
        top: 50
    },
    textThreeStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: "blue",
        backgroundColor: "lightblue"
    }
})

export default BoxScreen