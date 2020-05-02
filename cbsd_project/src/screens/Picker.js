import React, { useState, useEffect } from "react"
import { Button, Text, View, Image } from "react-native"
import * as ImagePicker from "expo-image-picker"
import Constants from "expo-constants"
import * as Permissions from "expo-permissions"
import * as ImageManipulator from "expo-image-manipulator"
import { getRes } from "../api"
import Reader from "./Speech"

const ImagePickerExample = () => {
    const [image, setImage] = useState(null)
    const [reader, setReader] = useState("")

    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            })
            if (!result.cancelled) {
                setImage(result)
                return result
            }
            console.log(result)
        } catch (E) {
            console.log(E)
        }
    }
    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== "granted") {
                alert("Sorry, we need camera roll permissions to make this work!")
            }
        }
    }
    const getResult = async () => {
        const uploadedImage = await _pickImage()
        let image = await ImageManipulator.manipulateAsync(
            uploadedImage.uri, [{ resize: { width: 640, height: 640 } }], { base64: true }
        )
        const res = await getRes(image)
        // console.log("res", res)
        setReader(res)
    }
    useEffect(() => {
        getPermissionAsync()
    })

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title="Pick an image from camera roll" onPress={getResult} />
            {image ? <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} /> : null}
            <Text>{reader}</Text>
            <Reader text={reader} />
        </View>
    )
}

export default ImagePickerExample