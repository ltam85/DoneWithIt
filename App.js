import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  let x = 1;

  console.log("Executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>
        Hello World - Really long text. Longer Longer Longer Longer Longer
        Longer Longer Longer Longer Longer Longer Longer Longer Longer Longer
        Longer
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
