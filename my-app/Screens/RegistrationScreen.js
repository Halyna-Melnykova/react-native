import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputTest}>Логін</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputTest}>Адреса електронної пошти</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputTest}>Пароль</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnTitle}>Зареєструватись</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Вже є акаунт? Ввійти</Text>
    </View>
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
    fontFamily: "Roboto",
    // fontStyle: "normal",
    fontWeight: "bold",
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

    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  inputTest: {
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
