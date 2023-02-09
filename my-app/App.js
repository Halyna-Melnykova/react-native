// import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import RegistrationScreen from "./Screens/RegistrationScreen";

// const image = { uri: "https://reactjs.org/logo-og.png" };

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  // console.log(Platform.OS);

  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          // визначаємо ОС та налаштовуємо поведінку клавіатури
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <RegistrationScreen />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: "Roboto-Regular",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
