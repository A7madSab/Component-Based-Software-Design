import React from 'react'
import { View } from 'react-native'
import { Button, Input } from "react-native-elements"
import { connect } from "react-redux"
import { signOut } from "../redux/action"

const Settings = ({ auth, signOut }) => (
    <View style={{ margin: 15 }}>
        <Input containerStyle={{ padding: 15 }} title="Email" value={auth.email} disabled />
        <Button containerStyle={{ padding: 15 }} title="Logout" onPress={signOut} />
        <Button containerStyle={{ padding: 15 }} title="logging" onPress={() => console.log(auth)} />
    </View>
)

const mapStateToProps = ({ auth }) => ({
    error: auth.error,
    auth: auth
})
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})
export default connect(mapStateToProps, mapDispatchToProps)(Settings)