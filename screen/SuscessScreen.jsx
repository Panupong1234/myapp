import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import theme from "../assets/theme";

const { width } = Dimensions.get("screen");

 const SuscessScreen = (props) => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Suscess</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 30,
    color: theme.COLORS.GREY,
    textAlign: 'center'
  }
});

export default SuscessScreen