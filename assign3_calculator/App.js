import React, { useState, useEffect, useRef } from "react"
import { KeyboardAvoidingView, View } from "react-native"
import RBSheet from "react-native-raw-bottom-sheet"
import { Input, Text, Button, Overlay } from 'react-native-elements';

export default App = () => {
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [visible, setVisible] = useState(false)
  const [operation, setOperation] = useState(null)
  const [multi, setMulti] = useState(null)
  const [result, setResult] = useState()
  const RBSheetRef = useRef()

  const getResult = () => {
    if (operation === "Add") {
      setResult(Number(number1) + Number(number2))
    } else if (operation === "Multiply") {
      setResult(Number(number1) * Number(number2) * Number(multi))
    } else if (operation === "Subtract") {
      setResult(Number(number1) - Number(number2))
    } else if (operation === "Division") {
      setResult(Number(number1) / Number(number2))
    } else {
      console.log("Handle Work")
    }
  }

  useEffect(() => {
    getResult()
  }, [number1, number2, visible, operation, multi, result])

  return (
    <KeyboardAvoidingView style={{ flex: 1, alignItems: "center" }}>
      <Text h2>Calculator</Text>

      <Input containerStyle={{ padding: 5 }} label="Number 1:" placeholder="85" value={number1} onChangeText={e => setNumber1(e)} />
      <Input containerStyle={{ padding: 5 }} label="Number 2:" placeholder="86" value={number2} onChangeText={e => setNumber2(e)} />

      <Button containerStyle={{ width: "85%", marginTop: 10 }} title="Choose Operation" type="outline" onPress={() => RBSheetRef.current.open()} />

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text h3>{number1} </Text>
        <Text h3>{operation} </Text>
        <Text h3>{number2} </Text>
        {multi && <Text h3>Multiply {multi}</Text>}
      </View>

      <View style={{ flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text h1>Result:{result}</Text>
      </View>

      <RBSheet ref={RBSheetRef} height={150} duration={250} customStyles={{ container: { justifyContent: "center", alignItems: "center" } }}>
        <View style={{ flex: 1, flexDirection: "row" }}>

          <View style={{ flex: 1 }}>
            <Button onPress={() => {
              setOperation("Add")
              RBSheetRef.current.close()
            }} containerStyle={{ margin: 10, width: "85%" }} title="Add" />
            <Button onPress={() => {
              setOperation("Multiply")
              setVisible(true)
              RBSheetRef.current.close()
            }} containerStyle={{ margin: 10, width: "85%" }} title="Multiply" />
          </View>

          <View style={{ flex: 1 }}>
            <Button onPress={() => {
              setOperation("Subtract")
              RBSheetRef.current.close()
            }} containerStyle={{ margin: 10, width: "85%" }} title="Subtract" />
            <Button onPress={() => {
              setOperation("Division")
              RBSheetRef.current.close()
            }} containerStyle={{ margin: 10, width: "85%" }} title="Division" />
          </View>

        </View>
      </RBSheet>

      <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <View style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text h3>Multiply</Text>
          <Button onPress={() => {
            setMulti(3)
            setVisible(false)
          }} containerStyle={{ margin: 10, width: "85%" }} title="Multi 3" />
          <Button onPress={() => {
            setMulti(4)
            setVisible(false)
          }} containerStyle={{ margin: 10, width: "85%" }} title="Multi 4" />

        </View>
      </Overlay>

    </KeyboardAvoidingView >
  )
}