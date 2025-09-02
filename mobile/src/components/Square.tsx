import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Square } from '../entities/Square'
import { Player } from '../entities/Player'

type SquareProp ={
  square : Square 
}
const SquareCard : React.FC<SquareProp> = ({ square}) => {
  const [player, setPlayer] = useState<Player | null>(null)
  return (
    <TouchableOpacity 

      onPressIn={()=>{console.log("pressed in")}}
      onPressOut={()=>{console.log("pressed out")}} 
      onPress={()=>{ setPlayer((new Player("X")))}}  
    >
      <View style={styles.square}>
        <Text style={styles.icon}>{player == null? "": "X"}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,    
    backgroundColor: "grey",
    borderWidth: 1 ,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"
  },
  icon:{
    fontSize:80,
    color:"red",
  }
});


export default SquareCard