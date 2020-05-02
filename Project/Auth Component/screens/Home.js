import React, { useState } from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'
import { connect } from "react-redux"
import { signOut } from "../redux/action"

const Home = ({ auth, signOut, navigation }) => {
    const [AsyncUser, setAsyncUser] = useState({})

    if (!auth.refreshToken) {
        navigation.navigate("auth")
    }
    const handleShowAsyncStorage = async () => {
        const user = await AsyncStorage.getItem("user")
        console.log(user)
        setAsyncUser(setAsyncUser)
    }
    return (
        <View>
            <Text>Home Page</Text>
            <Text>{JSON.stringify(auth)}</Text>
            <Button title="Logout" onPress={signOut} />
            <Button title="show AsyncStorage" onPress={handleShowAsyncStorage} />
            {/* {AsyncUser ? <Text>{AsyncUser}</Text> : null} */}
        </View>
    )
}

const mapStateToProps = ({ auth }) => ({
    error: auth.error,
    auth: auth
})
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
