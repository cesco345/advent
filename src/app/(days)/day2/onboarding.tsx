import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
export default function OnboardingScreen() {
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <FontAwesome5 name="wallet" size={50} color="#fff" />
      <Text style={styles.title}>Track Every Transaction</Text>
      <Text style={styles.description}>
        Welcome to Finance Tracker, the ultimate app for managing your finances
        with ease and precision.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  title: {
    fontSize: 34,
    fontWeight: "600",
    color: "FCFCFC",
  },
  image: {},
  description: {
    fontSize: 18,
    color: "#FCFCFC",
  },
});
