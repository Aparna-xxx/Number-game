import { View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return(
        <View> 
        
        <TextInput/>
        <PrimaryButton> Reset </PrimaryButton>
        <PrimaryButton> Play </PrimaryButton>

        </View>

    );
    
}

export default StartGameScreen;