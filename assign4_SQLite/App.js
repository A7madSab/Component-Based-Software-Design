import React, { useState, useEffect } from "react"
import { AsyncStorage, View, Picker, ScrollView } from "react-native"
import { Input, Button, Text } from "react-native-elements"
import * as _ from "lodash"

let seedData = ["Mario Speedwagon", "Petey Cruiser", "Anna Sthesia", "Paul Molive", "Anna Mull", "Gail Forcewind", "Paige Turner", "Bob Frapples", "Walter Melon", "Barb Ackue", "Buck Kinnear", "Greta Life", "Ira Membrit", "Shonda Leer", "Brock Lee", "Maya Didas", "Pete Sariya", "Monty Carlo", "Sal Monella", "Sue Vaneer", "Cliff Hanger", "Barb Dwyer", "Terry Aki", "Cory Ander", "Robin Banks", "Jimmy Changa", "Barry Wine", "Wilma Mumduya", "Buster Hyman", "Poppa Cherry", "Zack Lee", "Don Stairs", "Peter Pants", "Hal Appeno",]

const App = () => {
  const [names, setNames] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [filtedNames, setFiltedNames] = useState([])

  useEffect(() => {
    (async () => {
      const namedForSQLDB = await AsyncStorage.setItem("Names", JSON.stringify(seedData))
      setNames(seedData)
    })
  }, [])

  useEffect(() => {
    setFiltedNames(names.filter(name => _.includes(name, nameInput)))
  }, [nameInput])

  const getNames = async () => {
    setNames(seedData)
  }

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
      <Input inputStyle={{ color: "white" }} placeholder="Enter name" value={nameInput} onChangeText={e => setNameInput(e)} />
      <Button buttonStyle={{ backgroundColor: "blue" }} title="fetch db" onPress={getNames} />
      {
        filtedNames?.map(name => <Text style={{ color: "white", fontSize: 12 }} key={name}>{name}</Text>)
      }
    </View>
  )
}

export default App
