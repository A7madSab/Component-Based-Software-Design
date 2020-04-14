import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, AsyncStorage } from "react-native"
import { Input, Button } from "react-native-elements"
import _ from "lodash"

const SeedDepartmentData = [{ id: 1, name: "Sales" }, { id: 2, name: "Backend" }, { id: 3, name: "frontEnd" }]
const SeedNameData = [
  {
    name: "Ahmad",
    title: "ceo",
    phone: "01145191130",
    email: "ahmadsabry330@gmail.com",
    department: 1
  },
  {
    name: "aly",
    title: "cto",
    phone: "01125984462",
    email: "aly@gmail.com",
    department: 2
  },
  {
    name: "Mohmed",
    title: "cfo",
    phone: "01185967812",
    email: "Mohmed@gmail.com",
    department: 3
  }
]

export default function App() {
  const [nameInput, setNameInput] = useState("")
  const [departments, setDepartments] = useState([])
  const [employeeNames, setEmployeeNames] = useState([])
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem("employessNames", JSON.stringify(SeedNameData))
        await AsyncStorage.setItem("departmentNames", JSON.stringify(SeedDepartmentData))
      } catch (error) {
        throw new Error("Error Adding")
      }
    })()
  }, [])

  useEffect(() => {
    const filterdNamesWithoutDepartment = employeeNames.filter(employee => _.includes(employee.name, nameInput))
    const filterdNames = filterdNamesWithoutDepartment.map(employee => ({ ...employee, department: departments[employee.department] }))

    setFilteredList(filterdNames)
  }, [departments, employeeNames])

  const getEmployeesData = async () => {
    setDepartments(JSON.parse(await AsyncStorage.getItem("departmentNames")))
    setEmployeeNames(JSON.parse(await AsyncStorage.getItem("employessNames")))
  }

  return (
    <View style={styles.container}>
      <Input value={nameInput} onChangeText={e => setNameInput(e)} placeholder="Enter Employee Name" label="Name:" />
      <Button title="Get Employees" onPress={getEmployeesData} buttonStyle={styles.button} />
      {
        filteredList?.map((emp, key) => (
          <View key={key}>
            <Text>{emp.name}</Text>
            <Text> {emp.title}</Text>
            <Text> {emp.phone}</Text >
            <Text>{emp.email}</Text>
            <Text> {emp.department?.name}</Text>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15
  },
  button: {
    margin: 15,
  }
})
