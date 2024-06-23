import { StyleSheet, ImageBackground} from 'react-native';
import StartScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient style={styles.rootContainer} colors={['#32012F','#729762']}>
      <ImageBackground source={require("./assets/images/leaves.png")}  style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        <StartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //backgroundColor:'#F1F8E8',
  },

  backgroundImage:{
    opacity:0.3,
  }
  
});
