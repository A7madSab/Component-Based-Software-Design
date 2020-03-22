import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [EGP, setEGP] = useState(0)
  const [doller, setDoller] = useState(0)
  const [value, setValue ] = useState(0)

  const changeUStoEGP = (US) => {
    setValue(Number(EGP)*18)
  }
  const changeEGPtoUS = (EGP) =>{
    setValue(Number(doller)/18)
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
        <Text>EGP</Text>
        <TextInput style={{ backgroundColor: "white" }} placeholder="EGP" value={EGP} onChangeText={e => setEGP(e)} />
      </View>
      <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
        <Text>US</Text>
        <TextInput style={{ backgroundColor: "white" }} placeholder="US" value={doller} onChangeText={e => setDoller(e)} />
      </View>
      <Text>{value}</Text>
      
      <Button title="Change US to EGP" onPress={changeUStoEGP} />
      <Button title="Change EGP to US" onPress={changeEGPtoUS} />
    </KeyboardAvoidingView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

