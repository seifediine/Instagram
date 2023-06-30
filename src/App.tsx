import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import AndtDesign from 'react-native-vector-icons/AntDesign'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Pinazza</Text>
      <AndtDesign name="dingding" size={40} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  text: {
    fontSize: 24
  }
})
