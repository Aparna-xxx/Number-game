import { Text,StyleSheet,View} from "react-native";

function PlayScreen(){

    return(
        <View style={styles.parentContainer}>
            <Text>In play screen</Text>
        </View>
    )
}

export default PlayScreen;

const styles = new StyleSheet.create({
    parentContainer: {
        flex: 1,
        paddingTop:50,

    },
})