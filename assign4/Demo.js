import React, { useState, useEffect } from "react"
import { AsyncStorage, View, Picker } from "react-native"
import { Input, Button, Text } from "react-native-elements"

let seedData = [
  { dept: "IT" },
  { dept: "SW" },
  { dept: "Tech" },
]

const App = () => {
  const [deptName, setDeptName] = useState()
  const [depts, setDepts] = useState([])
  const [selectDept, setSelectDept] = useState("IT")

  useEffect(() => {
    AsyncStorage.setItem("Dept", JSON.stringify(seedData))
  }, [])

  const InsertDept = () => AsyncStorage.setItem('Dept', JSON.stringify([...depts, { dept: deptName }]))

  const GetDept = async () => setDepts(JSON.parse(await AsyncStorage.getItem("Dept")))

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Input containerStyle={{ margin: 15 }} label="Dept Name:" placeholder="IT Dept" value={deptName} onChangeText={newText => setDeptName(newText)} />
      <Button containerStyle={{ width: "80%" }} title="Insert Dept" onPress={InsertDept} />

      <Button containerStyle={{ width: "80%" }} title="Get All Dept" onPress={GetDept} />

      <Picker style={{ height: 50, width: "50%" }} selectedValue={selectDept} onValueChange={itemValue => setSelectDept(itemValue)}>
        {depts?.map((dept => <Picker.Item key={dept.dept} label={dept.dept} value={dept.dept} />))}
      </Picker>

    </View>
  )
}

export default App
