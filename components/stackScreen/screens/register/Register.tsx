import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";

const App = ({ navigation }) => {
  const SignUpBtnPress = (username: string, password: string) => {
    console.log("SignUpBtnPress button pressed!");

    if (username.length == 0 || password.length == 0) {
      Alert.alert("Error: Please enter username and password!");
      console.log("Sign up fail. Please enter username and password.");
    }
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginInfo = {
    username: username,
    password: password,
  };
  // console.log("SignUpBtnPress");
  return (
    <ImageBackground
      source={require("./img/background.jpg")}
      style={asm2Styles.image}
    >
      <View style={asm2Styles.wrapper}>
        <View style={asm2Styles.header}></View>
        <BlurView intensity={40} tint="light" style={asm2Styles.body}>
          <View style={asm2Styles.innerHeader}>
            <Text style={asm2Styles.text}>Sign Up</Text>
          </View>
          <View style={asm2Styles.innerBody}>
            <View style={asm2Styles.inputBox}>
              <TextInput
                style={asm2Styles.inputLabel}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              ></TextInput>
              <Ionicons name="person" size={50} color="black" />
            </View>
            <View style={asm2Styles.divide}></View>

            <View style={asm2Styles.inputBox}>
              <TextInput
                style={asm2Styles.inputLabel}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
              ></TextInput>
              <Ionicons name="lock-closed" size={50} color="black" />
            </View>
            <View style={asm2Styles.divide}></View>

            <View style={asm2Styles.loginBtn}>
              <Pressable onPress={() => SignUpBtnPress(username, password)}>
                <Text style={asm2Styles.loginText}>Sign Up</Text>
              </Pressable>
            </View>
            {/* <View style={asm2Styles.loginBtn}>
              <Pressable
                onPress={() => {
                  SignUpBtnPress(username, password);
                }}
              >
                <Text style={asm2Styles.loginText}>FirstView</Text>
              </Pressable>
            </View> */}
            <View style={asm2Styles.forgotPW}>
              <Pressable
                onPress={() => console.log("forgot password button pressed!")}
              >
                <Text style={asm2Styles.registerText}>Forgot password?</Text>
              </Pressable>
            </View>
          </View>

          <View style={asm2Styles.innerFooter}>
            <Text style={asm2Styles.innerFooterText}>
              Already have an account?{" "}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={asm2Styles.registerText}>Login here!</Text>
            </Pressable>
          </View>
        </BlurView>
        <View style={asm2Styles.footer}></View>
      </View>
    </ImageBackground>
  );
};

export default App;

const asm2Styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { flex: 0.1, backgroundColor: "transparent", width: "100%" },
  body: {
    flex: 3,
    backgroundColor: "transparent",
    width: "90%",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
  },
  footer: { flex: 0.1, backgroundColor: "transparent", width: "100%" },
  image: { width: "100%", height: "100%" },
  text: { color: "#162939", fontSize: 30, fontWeight: "bold" },
  innerHeader: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  innerBody: {
    flex: 2,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  innerFooter: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    color: "#162939",
    fontSize: 10,
  },
  innerFooterText: { color: "#162939", fontSize: 15 },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    width: "85%",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  divide: {
    width: "85%",
    backgroundColor: "#162939",
    height: 3,
    borderRadius: 2,
  },
  inputLabel: { color: "#162939", fontSize: 20 },
  loginBtn: {
    flex: 1,
    backgroundColor: "#162939",
    width: "85%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  loginText: { color: "white", fontSize: 20, fontWeight: "bold" },
  registerText: { color: "#162939", fontSize: 15, fontWeight: "bold" },
  forgotPW: {},
});
