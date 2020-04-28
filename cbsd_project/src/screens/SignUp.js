import React, { useState } from "react"
import { KeyboardAvoidingView } from "react-native"

import { Input, Text, Button } from "react-native-elements"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
import { primary } from "../utils"

import { connect } from "react-redux"
import { signUp } from "../redux/action"

const SignUp = ({ signUp, error, auth, navigation }) => {
    const [SignUpForm, setSignUpForm] = useState({ name: "", email: "", password: "", error: "" })
    if (auth.refreshToken) {
        navigation.navigate("app")
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={{ marginTop: 35, justifyContent: "center", alignItems: "center" }}>
            <Text h2>Sign Up</Text>
            <Input
                label="Full Name"
                value={SignUpForm.name}
                onChangeText={newText => setSignUpForm({ ...SignUpForm, name: newText })}
                inputStyle={{ paddingLeft: 10 }}
                containerStyle={{ margin: 10 }}
                placeholder=" Ahmad Sabry"
                leftIcon={<Feather name="user" size={24} color={primary} />}
            />
            <Input
                label="Email"
                value={SignUpForm.email}
                onChangeText={newText => setSignUpForm({ ...SignUpForm, email: newText })}
                inputStyle={{ paddingLeft: 10 }}
                containerStyle={{ margin: 10 }}
                placeholder=" Something@gmail.com"
                leftIcon={<Feather name="lock" size={24} color={primary} />}
            />
            <Input
                label="Password"
                value={SignUpForm.password}
                onChangeText={newText => setSignUpForm({ ...SignUpForm, password: newText })}
                inputStyle={{ paddingLeft: 10 }}
                containerStyle={{ margin: 10 }}
                placeholder=" **********"
                leftIcon={<MaterialCommunityIcons name="email-outline" size={24} color={primary} />}
                secureTextEntry={true}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>{JSON.stringify(auth)}</Text>
            <Button title="Sign Up" onPress={() => signUp(SignUpForm)} containerStyle={{ width: "95%", margin: 15 }} />
        </KeyboardAvoidingView>
    )
}

const mapStateToProps = ({ auth }) => ({
    error: auth.error,
    auth: auth,
    refreshToken: auth.refreshToken
})
const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
