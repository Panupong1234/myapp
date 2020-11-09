import React from "react";
import axios from "axios";
import { View, StyleSheet, Dimensions } from "react-native";
import theme from "../assets/theme";
import moment from "moment";
import RegisterForm from "../component/form/RegisterForm";

const { width } = Dimensions.get("screen");

const RegisterScreen = (props) => {
  
  const handleSubmit = (data) => {
    console.log("handleSubmit ===> ", data, props);
    props.navigation.push("Suscess", data);
  };

  const handleCancle = () => {
    props.navigation.jumpTo("Home");
  };

  return (
    <View>
      <RegisterForm onSubmit={handleSubmit} onCancle={handleCancle} />
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

export default RegisterScreen;
