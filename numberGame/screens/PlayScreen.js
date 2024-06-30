import { Text,StyleSheet,View} from "react-native";
import Title from "../components/Title";
import Colors from "../util/Colors";
import { useState } from "react";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

function PlayScreen(props){

    const firstNum= generateRandomBetween(1,100, props.enteredValue)
    const [guess,SetGuess]=useState(firstNum);

    return(
        <View style={styles.parentContainer}>
            <View style={styles.textContainer}>
                <Title>Opponent's Guess</Title>               
            </View>
            <View style={styles.guessContainer}>
                    <Text style={styles.guessTextStyle}>{guess}</Text>
                </View>
        </View>
    )
}

export default PlayScreen;

const styles = new StyleSheet.create({
    parentContainer: {
        flex: 1,
        paddingTop:50,

    },
    textContainer: {
        marginTop:20,
        marginHorizontal:10,
        alignItems:'center',
        backgroundColor:Colors.Primary1,
        height:70,
        borderRadius:10,
        justifyContent:'center',

    },
    textStyle: {
        color:'#F1F8E8',
        fontSize:24
    },
    guessContainer: {
        marginTop:20,
        marginHorizontal:10,
        alignItems:'center',
        backgroundColor:Colors.Primary1,
        height:100,
        borderRadius:10,
        justifyContent:'center',
    },
    guessTextStyle: {
        color:'#F1F8E8',
        fontSize:32,
    }
})