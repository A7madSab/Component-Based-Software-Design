import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from "react-redux"
import { signOut } from "../redux/action"

const Home = ({ auth, signOut, navigation }) => {
    if (!auth.refreshToken) {
        navigation.navigate("auth")
    }
    return (
        <View>
            <Text>Home Page</Text>
            <Text>{JSON.stringify(auth)}</Text>
            <Button title="Logout" onPress={signOut}/>
        </View>
    )
}

const mapStateToProps = ({ auth }) => ({
    error: auth.error,
    auth: auth
})
const mapDispatchToProps = dispatch => ({
    signOut: user => dispatch(signOut(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
