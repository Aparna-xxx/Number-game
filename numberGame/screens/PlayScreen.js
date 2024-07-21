import { Text,StyleSheet,View, Alert} from "react-native";
import Title from "../components/Title";
import Colors from "../util/Colors";
import { useState ,useEffect} from "react";
import Button from '../components/Button.js'
import Ionicons from '@expo/vector-icons/Ionicons';




function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

 

    let minB=1;
    let maxB=100;

function PlayScreen({enteredValue, onGameOver}){
    

    
    const firstNum= generateRandomBetween(1,100,enteredValue)
    const [guess,SetGuess]=useState(firstNum);
    const [rounds,SetRounds]=useState([firstNum]);



    useEffect(()=>{
        if(enteredValue==guess){
            onGameOver(rounds.length);
        }
    },[guess,enteredValue,onGameOver])

    useEffect(()=>{
        minB=1
        maxB=100
    },[]);

    function HandleNextGuess(direction){

        if(
            (direction==="lower" && guess < enteredValue) ||
            (direction==="higher" && guess>enteredValue)
        ){
            Alert.alert("Don't lie","You know you are lying",[{text:"Sorry", style:'cancel'}])
            return;
        }



        else if(direction==="lower"){
                maxB=guess;
                console.log("lower")
        }
        else{
            minB=guess+1;     
            console.log("highers")      
        }
        const new_rand=generateRandomBetween(minB, maxB, guess)
        SetGuess(new_rand)

        SetRounds(prevRounds =>[new_rand,...prevRounds])
  }

    return(
        <View style={styles.parentContainer}>
            <View style={styles.textContainer}>
                <Title>Opponent's Guess</Title>               
            </View>
            <View style={styles.guessContainer}>
                    <Text style={styles.guessTextStyle}>{guess}</Text>
                    <View style={styles.subTextContainer}>
                        <Text style={styles.subText}>Let me know if your secret value is greater or smaller when compared to my guess 😉 </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button OnPress={HandleNextGuess.bind(this,"lower")}>
                            <Ionicons name="remove-sharp" size={24}></Ionicons>
                        </Button>
                        <Button OnPress={HandleNextGuess.bind(this,"higher")}>
                            <Ionicons name="add-sharp" size={24}></Ionicons>
                        </Button>
                    </View>
                    
            </View>
            <View style={styles.roundsInfo}>
                        <Title>Your guesses:</Title>   
                        { rounds.map(round=><Text key={round} style={styles.roundsText}>{round}</Text>)}

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
        borderRadius:10,
        justifyContent:'center',
    },
    guessTextStyle: {
        color:'#F1F8E8',
        fontSize:32,
    },
    buttonContainer:{
        flexDirection:'row',
        paddingVertical:24,
        width:'80%',
        // borderWidth:2,
        justifyContent:'space-between'
    },
    subText:{
        color:'#F1F8E8',
        fontStyle:'italic',
        fontWeight:'condensed',
        textAlign:'center',
        paddingTop:10,
    },
    subTextContainer:{
        paddingHorizontal:30,
    },
    roundsInfo:{
        alignItems:'center',
        marginTop:20
    },
    roundsText:{
        color:'white',
        fontSize:20,
        marginTop:4,
    }
})