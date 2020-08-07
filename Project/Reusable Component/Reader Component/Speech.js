import React from 'react'
import { Button } from 'react-native'
import * as Speech from 'expo-speech'

const Reader = ({ text }) => {
    const speak = () => {
        var thingToSay = text
        Speech.speak(thingToSay)
    }
    return (
        <Button title="Press to hear some words" onPress={speak} />
    )
}

export default Reader