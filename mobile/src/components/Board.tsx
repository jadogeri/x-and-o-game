import React, { useState } from 'react'
import Square from './Square'
import { View } from 'react-native'
import { GameBoard } from '../entities/GameBoard'

type BoardProp ={
  gameBoard: GameBoard
}
const Board : React.FC<BoardProp>= ({gameBoard }) => {

  // const gameBoard = new GameBoard();
  return (
    <View>
      <View style={{display: 'flex',flexDirection:"row"}}>
        <Square square={gameBoard.getSquare(0,0)}/>
        <Square square={gameBoard.getSquare(1,0)}/>
        <Square square={gameBoard.getSquare(2,0)}/>
      </View>
      <View style={{display: 'flex',flexDirection:"row"}}>
        <Square square={gameBoard.getSquare(0,1)}/>
        <Square square={gameBoard.getSquare(1,1)}/>
        <Square square={gameBoard.getSquare(2,1)}/>
      </View>
      <View style={{display: 'flex',flexDirection:"row"}}>
        <Square square={gameBoard.getSquare(0,2)}/>
        <Square square={gameBoard.getSquare(1,2)}/>
        <Square square={gameBoard.getSquare(2,2)}/>
      </View>
    </View>
  )
}

export default Board