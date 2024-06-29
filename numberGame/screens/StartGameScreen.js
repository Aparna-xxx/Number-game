import { View, TextInput, StyleSheet , Alert} from "react-native";
import { useState } from "react";
import Button from "../components/Button";



function StartGameScreen(){
    
    const [enteredValue, setEnteredValue] = useState('');

    function handleInput(inputText){
        setEnteredValue (inputText);
    }

    function ResetText(){
        setEnteredValue('');
    }

    function confirmValue(){
        if(parseInt(enteredValue)<1 || parseInt(enteredValue)>99){
            Alert.alert("Invalid number",'Enter values within 1 to 99', [{text:"okay",style:'destructive', onPress:ResetText}])
        }
        else if(isNaN(parseInt(enteredValue))){
            Alert.alert("Invalid data",'Enter numerical values only', [{text:"okay",style:'destructive', onPress:ResetText}])
        }
    }
    
    
    return(
        <View style = {styles.inputContainer}>         
            <TextInput style= {styles.numberInput} maxLength={2} keyboardType="number-pad" value={enteredValue} onChangeText={handleInput}/>
            <View style= {styles.buttonInternalContainer}>
                <Button OnPress={ResetText}> Reset </Button>
                <Button OnPress={confirmValue}> Play </Button>
            </View>
        </View>

    );
    
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex:1,
        padding:16,
        marginTop:100,
        backgroundColor: '#55AD9B',
        marginHorizontal:15,
        borderRadius:8,
        elevation:8,
        alignItems:'center'
    },
    numberInput: {
        height: 50,
        width:50,
        borderBottomColor:"#F1F8E8",
        borderBottomWidth:2,
        color:"#F1F8E8",
        fontSize:32,
        fontWeight:"bold",
        textAlign:"center",
    },
    buttonInternalContainer: {
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        width:'95%',
        
    

        }

})

export default StartGameScreen;