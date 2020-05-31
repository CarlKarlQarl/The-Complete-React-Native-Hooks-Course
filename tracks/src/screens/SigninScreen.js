import React, { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import { Context } from "../context/AuthContext"

const SigninScreen = () => {
    const { state, signin } = useContext(Context)

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink 
                routeName="Signup"
                text="Don't have an account? Sign up instead!"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 50,
        marginTop: 50
    }
})

export default SigninScreen