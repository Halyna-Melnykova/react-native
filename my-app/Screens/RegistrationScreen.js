import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    onLogin();
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${email}`);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={name}
            placeholder="Логін"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={nameHandler}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={email}
            placeholder="Адреса електронної пошти"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={emailHandler}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={password}
            placeholder="Пароль"
            style={styles.input}
            secureTextEntry={true}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={passwordHandler}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={keyboardHide}
        >
          <Text style={styles.btnTitle}>Зареєструватись</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Вже є акаунт? Ввійти</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    // flex: 0.5,
    justifyContent: "center",

    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    marginBottom: 33,
    // fontFamily: "Roboto-Bold",
    // fontStyle: "normal",
    // fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },

  inputWrapper: {
    marginBottom: 16,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    borderRadius: 10,

    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  placeholder: {
    // fontFamily: "Roboto",
    // fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
  },
  text: {
    // fontFamily: "Roboto",
    // fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
