import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import Constants from 'expo-constants'
import * as Speech from 'expo-speech'

const Reader = ({text}) => {
    const speak = () => {
        var thingToSay = text
        Speech.speak(thingToSay)
    }

    return (
        <View style={styles.container}>
            <Button title="Press to hear some words" onPress={speak} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Reader