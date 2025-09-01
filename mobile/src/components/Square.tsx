import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Square = () => {
  return (
    <View style={styles.square}><Text>Square</Text></View>
  )
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,    
    backgroundColor: "grey",
    borderWidth: 1
  },
});


export default Square