import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Block } from "galio-framework";
import { Cards } from "../component/Card";
import theme from "../assets/theme";
import moment from "moment";
import RegisterForm from "../component/form/RegisterForm";

const { width } = Dimensions.get("screen");

const AddMovieScreen = (props) => {
  console.log("props ====> ", JSON.stringify(props));
  const handleSubmit = (data) => {
    console.log("handleSubmit ===> ", JSON.stringify(data));
    navigation.navigate("Suscess", data);
  };

  const handleCancle = () => {
    console.log("handleCancle ===> ");
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

export default AddMovieScreen;
