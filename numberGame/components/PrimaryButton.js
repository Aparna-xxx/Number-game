import { View, Text } from "react-native";

function PrimaryButton(props){
    return(
        <View>
            {/* the props.children fetches everthing inbetween the opening and closing tag of PrimaryButton tag */}
            <Text> {props.children} </Text>
        </View>
    );
}

export default PrimaryButton;