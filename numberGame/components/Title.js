import { Text,StyleSheet } from "react-native";
import Colors from "../util/Colors";
function Title(props){
    return(
        <Text style={styles.textStyle}>{props.children} </Text>
    )

}

export default Title;

const styles = StyleSheet.create({
    textStyle: {
        color:'#F1F8E8',
        fontSize:24
    },
})