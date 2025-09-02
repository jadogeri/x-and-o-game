import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './src/components/Board';
import { useEffect, useState } from 'react';
import { Player } from './src/entities/Player';
import { IconType } from './src/types/IconType';
import { GameState } from './src/types/GameState';
import { PlayerType } from './src/types/PlayerType';
import { GameBoard } from './src/entities/GameBoard';

export default function App() {
  const [gameBoard, setGameBoard] = useState<GameBoard>(new GameBoard())
  const [isIconSelected, setIsIconSelected] = useState<boolean>(false)
  const [activePlayer, setActivePlayer] = useState<PlayerType>('human');
  const [gameState, setGameState] = useState<GameState>('begin');
  const [icon, setIcon] = useState<IconType>(null)
  const [contender, setContender] = useState<Player>(new Player("Contender"));
  const [computer, setComputer] = useState<Player>(new Player("Computer"));


  useEffect(() => {
    // Game ends when turn count reaches initialTurnCount, simulating "night"
    // if (turn >= initialTurnCount) {
    //   setGameState('night');
    //   return;
    // }

    // Computer's turn logic
    if (activePlayer === 'computer') {
      // Simulate computer action
      const timer = setTimeout(() => {
        //setTurn(currentTurn => currentTurn + 1);
        setActivePlayer('human');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [//turn
    , activePlayer//, initialTurnCount

  ]);



  const handleIconChange = (icon: IconType)=>{
    if(icon === "O"){
      contender.setIcon(icon);
      computer.setIcon("X");
    }
    else{
      contender.setIcon(icon);
      computer.setIcon("O");
    }
    setIcon(icon)
    setIsIconSelected(true)
  }
  return (


    <View style={styles.container}>
      {isIconSelected?<></>:
      <>
        <View>
          <Text>Choose Icon</Text>
          <Text onPress={()=>{handleIconChange("X")}}>X</Text>
          <Text onPress={()=>{handleIconChange("O")}}>O</Text>
        </View>
      </>
      }
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Board gameBoard={gameBoard}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
