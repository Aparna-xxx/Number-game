import { View, TextInput, StyleSheet } from "react-native";
import Button from "../components/Button";

function StartGameScreen(){
    return(
        <View style = {styles.inputContainer}>         
            <TextInput style= {styles.numberInput} maxLength={2} keyboardType="number-pad"/>
            <View style= {styles.buttonInternalContainer}>
                <Button> Reset </Button>
                <Button> Play </Button>
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