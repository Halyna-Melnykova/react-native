// import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

// const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
