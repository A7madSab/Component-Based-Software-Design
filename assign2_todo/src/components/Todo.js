import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, ToastAndroid, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native"

const ToDoList = ({ navigation }) => {
    const [toDoList, setToDoList] = useState([])
    const [input, setInput] = useState("")
    const addToDo = () => {
        setToDoList(toDoList.concat([input]))
        setInput("")
    }
    const deleteToDo = (toDoItem) => {
        setToDoList(toDoList.filter(item => toDoItem === item ? false : true))
        setInput("")
    }
    const displayToast = (toDoItem) => {
        ToastAndroid.show(toDoItem, ToastAndroid.SHORT)
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Button title="Navigate to Grid" onPress={() => navigation.navigate("Alphabetics")} />
            <TextInput value={input} onChangeText={e => setInput(e)} placeholder="Enter Item" />
            {
                toDoList.map((toDoItem, key) => (
                    <View key={key} style={styles.item}>
                        <TouchableOpacity onPress={() => displayToast(toDoItem)} onLongPress={() => deleteToDo(toDoItem)} style={{ paddingLeft: 15, backgroundColor: "red" }} >
                            <Text>{toDoItem}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
            <Button title="Add To Do" onPress={addToDo} />
        </KeyboardAvoidingView>
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
export default ToDoList