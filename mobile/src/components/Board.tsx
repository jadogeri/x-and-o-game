import React from 'react'
import Square from './Square'
import { View } from 'react-native'

const Board = () => {
  return (
    <View>
      <View style={{display: 'flex',flexDirection:"row"}}>
        <Square /><Square /><Square />
      </View>
      <View style={{display: 'flex',flexDirection:"row"}}>
        <Square /><Square /><Square />
      </View>
      <View style={{display: 'flex',flexDirection:"row"}}>
        <Square /><Square /><Square />
      </View>
    </View>
  )
}

export default Board