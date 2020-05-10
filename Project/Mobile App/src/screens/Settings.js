import React, { useEffect, useState } from 'react'
import { View, AsyncStorage } from 'react-native'
import { Button, Input } from "react-native-elements"
import { connect } from "react-redux"
import { signOut } from "../redux/action"
import Notification from "../component/Notification"

const Settings = ({ auth, signOut, navigation }) => {
    const [user, setUser] = useState({ age: "", id: "", name: "", age: "" })

    useEffect(() => {
        (async () => {
            try {
                const user = await AsyncStorage.getItem("user")
                const userObj = await JSON.parse(user)
                setUser(userObj)
            } catch {

            }
        })()
    }, [])

    const handleSignOut = () => {
        signOut()
        navigation.navigate("auth")
    }
    const handleSave = async () => {
        await AsyncStorage.removeItem("user")
        await AsyncStorage.setItem("user", JSON.stringify(user))

    }
    return (
        <View style={{ margin: 15 }}>
            <Input containerStyle={{ padding: 15 }} label="ID" value={user.id} disabled />
            <Input
                containerStyle={{ padding: 15 }}
                label="Email"
                value={user.email}
                onChangeText={newText => setUser({ ...user, email: newText })}
            />
            <Input
                containerStyle={{ padding: 15 }}
                label="Name"
                value={user.name}
                onChangeText={newText => setUser({ ...user, name: newText })}
            />
            <Input
                containerStyle={{ padding: 15 }}
                label="Age"
                value={user.age}
                onChangeText={newText => setUser({ ...user, age: newText })}
            />

            <Button containerStyle={{ padding: 15 }} title="Save New Values" onPress={handleSave} />

            <Button containerStyle={{ padding: 15 }} title="Logout" onPress={handleSignOut} />
            <Notification />
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
export default connect(mapStateToProps, mapDispatchToProps)(Settings)