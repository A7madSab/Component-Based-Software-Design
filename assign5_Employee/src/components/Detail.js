import React from 'react'
import { View, Text } from 'react-native'

const Detail = ({ navigation }) => {
    const { emp } = navigation.state.params
    return (
        <View style={{ padding: 35 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 24 }}>{emp?.name}</Text>
                <Text>({emp?.title})</Text>
            </View>

            <Text>Email: {emp?.email}</Text>
            <Text>Phone: {emp?.phone}</Text>
            <Text>Department id: {emp?.department?.id}</Text>
            <Text>Department Name: {emp?.department?.name}</Text>
        </View>
    )
}

export default Detail
