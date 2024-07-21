import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import PlayScreen from './screens/PlayScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, SetUserNumber]=useState(null);
  const [gameOver,SetGameOver]=useState(true);
  const [roundsNum,SetRoundsNum]=useState(0);

  function StartNewGameHandler(){
      SetRoundsNum(0);
      SetUserNumber(null);
      }

  function NumberIsEntered(number){
    SetUserNumber(number)
    SetGameOver(false)
  }

  function GameOverHandler(numberOfRounds){
    SetGameOver(true);
    SetRoundsNum(numberOfRounds)
  }

  let Screen = <StartGameScreen onPickNumber={NumberIsEntered}/>;
  if(userNumber){
    Screen=<PlayScreen enteredValue={userNumber} onGameOver={GameOverHandler}/>
  }
  if(gameOver && userNumber){
    Screen=<GameOverScreen userNumber={userNumber} roundsNumber={roundsNum} startNewGame={StartNewGameHandler}/>
  }

  
  return (
    <LinearGradient style={styles.rootContainer} colors={['#32012F','#729762']}>
      <ImageBackground source={require("./assets/images/leaves.png")}  style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootContainer}>{Screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //backgroundColor:'#F1F8E8',
  },

  backgroundImage:{
    opacity:0.3,
  }
  
});
