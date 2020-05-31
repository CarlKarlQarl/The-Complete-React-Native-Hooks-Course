import React, { useState } from "react"
import { Text, Button, Input } from "react-native-elements"
import { StyleSheet } from "react-native"
import Spacer from "./Spacer"

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) =>{
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    return (
        <>
            <Spacer>
                <Text h4>{headerText}</Text>
            </Spacer>

            <Input 
                label="Email" 
                value={email} 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newEmail) => {
                    setEmail(newEmail)
                }}
            />
            <Spacer/>
            <Input 
                label="Password"
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={(newPassword) => {
                    setPassword(newPassword)
                }}
            />

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <Spacer>
                <Button 
                    title={submitButtonText}
                    onPress={() => {onSubmit({email, password})}}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15
    }
})

export default AuthForm