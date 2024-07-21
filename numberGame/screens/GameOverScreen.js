import { Text, View, StyleSheet, Image } from "react-native";
import Button from '../components/Button';
function GameOverScreen({roundsNumber, userNumber, startNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Text style= {styles.title}>    Game Over    </Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />

            </View>
            <Text style={styles.myText}> It took <Text style={styles.highlight}>{roundsNumber}</Text> guesses for your phone to find the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <Button OnPress={startNewGame}> Play again </Button>
        </View>
    )

}

export default GameOverScreen;

const styles=StyleSheet.create({
    rootContainer: {
        paddingTop:80,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:30
    },
    title:{
        fontSize:30,
        color:'white',
        borderWidth:2,
        borderColor:'white'
        

    },
    image:{
        width:200,
        height:200,
    },
    imageContainer: {
        marginVertical:30,
        borderRadius:50,
        overflow:'hidden'
    },
    myText:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        marginBottom:20,
    },
    highlight: {
        color: '#32012F',
        fontStyle:'italic',
        fontWeight:'bold'
    }

})