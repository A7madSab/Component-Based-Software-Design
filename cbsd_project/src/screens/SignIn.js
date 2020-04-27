import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Input, Text, Button } from "react-native-elements"
import Feather from "react-native-vector-icons/Feather"
import { primary } from "../utils"
import {connect} from "react-redux"
import {signIn} from "../redux/action"

const SignIn = ({auth}) => {
    const [signInForm, setSignInForm] = useState({ email: "", password: "", error: "" })
    return (
        <KeyboardAvoidingView behavior="padding" style={{ marginTop: 35, alignItems: "center" }}>
            <Text h2>Sign In</Text>
            <Input
                label="Email"
                value={signInForm.email}
                onChangeText={newText => setSignInForm({ ...signInForm, email: newText })}
                inputStyle={{ paddingLeft: 10 }}
                containerStyle={{ margin: 10 }}
                placeholder=' Something@gmail.com'
                leftIcon={<Feather name="user" size={24} color={primary} />}
            />
            <Input
                label="Password"
                value={signInForm.password}
                onChangeText={newText => setSignInForm({ ...signInForm, password: newText })}
                inputStyle={{ paddingLeft: 10 }}
                containerStyle={{ margin: 10 }}
                placeholder=' **********'
                leftIcon={<Feather name="lock" size={24} color={primary} />}
                secureTextEntry={true}
            />
            <Button title="Sign In" containerStyle={{width:"95%", margin:15}} onPress={() => console.log(signInForm)} />
        </KeyboardAvoidingView>
    )
}

const mapStateToProps = ({auth}) =>({
    auth
})
const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user))
})

export default SignIn
