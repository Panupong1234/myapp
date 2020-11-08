import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import theme from "../assets/theme";

const { width } = Dimensions.get("screen");

 const SuscessScreen = (props) => {

  return (
    <View style={styles.container}>
        <Text>Suscess</Text>
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
});

export default SuscessScreen