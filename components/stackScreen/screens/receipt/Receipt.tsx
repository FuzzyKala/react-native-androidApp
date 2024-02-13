import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={asm1Styles.wrapper}>
      <View style={asm1Styles.header}>
        <View
          style={{
            height: 200,
            width: 200,
            borderRadius: 200,
            backgroundColor: "#7b7b7b",
            position: "absolute",
            left: -70,
            top: -70,
            zIndex: 250,
          }}
        ></View>
        <View
          style={{
            height: 140,
            width: 140,
            borderRadius: 140,
            backgroundColor: "#7b7b7b",
            position: "absolute",
            right: -40,
            top: -40,
            zIndex: 250,
          }}
        ></View>
      </View>
      <View style={asm1Styles.bodyWrapper}>
        <View style={asm1Styles.body}>
          <View
            style={{
              height: 140,
              width: 140,
              borderRadius: 140,
              backgroundColor: "#7b7b7b",
              position: "absolute",
              left: -80,
              top: -80,
              zIndex: 200,
            }}
          ></View>
          <View style={asm1Styles.innerHeader}></View>
          <View style={asm1Styles.innerBody}>
            <View>
              <Image
                style={asm1Styles.logo}
                source={require("./img/receiver.png")}
              ></Image>
              <View style={asm1Styles.checkMark}>
                <Entypo name="check" size={24} color="white" />
              </View>
            </View>
            <Text style={asm1Styles.notification}>
              <Text>Sent successfully to </Text>
              <Text style={{ fontWeight: "bold" }}>Sam Chou</Text>
            </Text>
            <Text style={asm1Styles.amount}>
              <Text>$100.00</Text>
            </Text>
            <View style={asm1Styles.senderInfo}>
              <Image
                style={asm1Styles.avantar}
                source={require("./img/avantar.jpg")}
              ></Image>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                  Sam Chou
                </Text>
                <Text style={{ fontSize: 10 }}>Sam.Chou@OAMK.edu</Text>
              </View>
            </View>
            <View style={asm1Styles.divideLineWrapper}>
              <View style={asm1Styles.divideLine}></View>
            </View>
            <Text style={asm1Styles.transactioninfo}>
              <Text style={asm1Styles.lightText}>Transaction done on </Text>
              <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                12 January 2024.{"\n"}
              </Text>
              <Text style={asm1Styles.lightText}>
                your reference number is 03492390
              </Text>
            </Text>
            <View style={asm1Styles.continueBtn}>
              <LinearGradient
                colors={["#EF8058", "#406C6C"]}
                style={asm1Styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={{ color: "white" }}>Continue</Text>
              </LinearGradient>
            </View>
          </View>
          <View
            style={{
              height: 140,
              width: 140,
              borderRadius: 140,
              backgroundColor: "#7b7b7b",
              position: "absolute",
              right: -80,
              bottom: -80,
              zIndex: 200,
            }}
          ></View>
        </View>
      </View>
      <View style={asm1Styles.footer}></View>
    </View>
  );
}

const asm1Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: "#406C6C",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    backgroundColor: "transparent",
    width: "100%",
  },

  bodyWrapper: {
    flex: 4,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    width: "85%",
    backgroundColor: "white",
    // flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  footer: {
    flex: 0.5,
    height: 10,
    width: "100%",
    backgroundColor: "transparent",
  },
  innerHeader: { width: "100%", height: "10%", backgroundColor: "transparent" },
  innerBody: {
    width: "100%",
    height: "80%",
    backgroundColor: "transparent",
    // justifyContent: "center",
    alignItems: "center",
  },
  logo: { width: 100, height: 100, borderRadius: 100 },
  notification: { padding: 10, backgroundColor: "transparent" },
  amount: {
    padding: 10,
    backgroundColor: "transparent",
    fontSize: 30,
    fontWeight: "bold",
    color: "#406C6C",
  },
  avantar: { width: 60, height: 60, borderRadius: 60, margin: 20 },
  senderInfo: {
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  divideLineWrapper: {
    width: "95%",
    height: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  divideLine: {
    width: "100%",
    height: 2,
    backgroundColor: "gray",
    borderRadius: 2,
  },
  lightText: { fontSize: 10 },
  transactioninfo: {
    height: 40,
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  continueBtn: {
    width: "95%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  linearGradient: {
    borderRadius: 30,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
    backgroundColor: "#406C6C",
    height: 24,
    width: 24,
    borderRadius: 24,
    position: "absolute",
    right: 5,
    top: 70,
  },
});
