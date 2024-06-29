import { View, Text,Pressable, StyleSheet } from "react-native";

function PrimaryButton(props){



    return(
        
         <View style={styles.buttonStyle}>
            <Pressable onPress={props.OnPress} android_ripple={{color:"#95D2B3"}} style={styles.pressStyle}>
                {/* the props.children fetches everthing inbetween the opening and closing tag of PrimaryButton tag */}
                <Text style={styles.buttonTextStyle}> {props.children} </Text>
            </Pressable>
        </View>
        
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#F1F8E8',
        height:40,
        width:120,
        borderRadius:50,
        color:'#55AD9B',
        elevation:8,
        overflow:'hidden'
        
    },
    buttonTextStyle:{
        fontSize:16,
        borderRadius:8,
    },
    pressStyle:{
        width:'100%',
        height:'100%',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        
    }

})

export default PrimaryButton;