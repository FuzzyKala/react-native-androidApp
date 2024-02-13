import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInPage from "./screens/login/Login";
import RegisterPage from "./screens/register/Register";
import ReceiptPage from "./screens/receipt/Receipt";

const Stack = createNativeStackNavigator();

export default function L7Navigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LogInPage}
            options={{ headerShown: true }}
          ></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ headerShown: true }}
          ></Stack.Screen>
          <Stack.Screen
            name="Receipt"
            component={ReceiptPage}
            options={{ headerShown: true }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
