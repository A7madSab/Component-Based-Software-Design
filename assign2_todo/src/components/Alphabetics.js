import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, ToastAndroid, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native"

const Alphabetics = () => {
    const [a, seta] = useState("a")
    const [b, setb] = useState("b")
    const [c, setc] = useState("c")
    const [d, setd] = useState("d")
    const [e, sete] = useState("e")
    const [f, setf] = useState("f")
    const [g, setg] = useState("g")
    const [h, seth] = useState("h")

    return (
        <View>
            <Text>Alphabetics</Text>
            <View style={styles.row}>
                <Text style={styles.text} onPress={() => a === "a" ? seta("A") : seta("a")}>{a}</Text>
                <Text style={styles.text} onPress={() => b === "b" ? setb("B") : setb("b")}>{b}</Text>
                <Text style={styles.text} onPress={() => c === "c" ? setc("C") : setc("c")}>{c}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text} onPress={() => d === "d" ? setd("D") : setd("d")}>{d}</Text>
                <Text style={styles.text} onPress={() => e === "e" ? sete("E") : sete("e")}>{e}</Text>
                <Text style={styles.text} onPress={() => f === "f" ? setf("F") : setf("f")}>{f}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text} onPress={() => g === "g" ? setg("G") : setg("g")}>{g}</Text>
                <Text style={styles.text} onPress={() => h === "h" ? seth("H") : seth("h")}>{h}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    item: {
        padding: 15,
        margin: 15,
        flexDirection: "row"
    },
    text: {
        fontSize: 22
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    }
})

export default Alphabetics