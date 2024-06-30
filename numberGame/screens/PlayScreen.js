import { Text,StyleSheet,View} from "react-native";
import Title from "../components/Title";
import Colors from "../util/Colors";
function PlayScreen(){

    return(
        <View style={styles.parentContainer}>
            <View style={styles.textContainer}>
                <Title>Opponent's Guess</Title>
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
    }
})