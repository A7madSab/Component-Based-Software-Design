import React, { useState, useEffect } from "react"
import MapView, { Marker } from "react-native-maps"
import * as Location from "expo-location"
import { StyleSheet, Text, View, Dimensions } from "react-native"

const Map = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied")
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    })
    return (
        <View style={styles.container}>
            {location ? <Text style={{ marginTop: 150 }}>{`latitude: ${location.coords.latitude}  longitude: ${location.coords.longitude}`}</Text> : null}
            {errorMsg ? <Text style={{ marginTop: 150 }}>{errorMsg}</Text> : null}

            {
                location
                    ? <MapView style={styles.mapStyle}>
                        <Marker
                            coordinate={location.coords}
                            title={"Current Location"}
                        />
                    </MapView>
                    : null
            }
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
})
