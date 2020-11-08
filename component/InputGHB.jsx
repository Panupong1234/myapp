import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text, TextInput, TextInputN } from "react-native";
import theme from "../assets/theme";
const { width } = Dimensions.get("window");

export const InputGHB = (props) => {
  const { label, onChangeText, placeholder, errors, full, keyboardType } = props;
  const [dimensions, setDimensions] = useState({
    dimensions: { width: 0, height: 0 },
  });

  const styles = StyleSheet.create({
    multipleInput: {
      display: "flex",
      flex: full ? 0 : 1,
      padding: 13,
      width: full ? width : dimensions.width,
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.COLORS.PRIMARY
    },
    input: {
        width: dimensions.width,
        height: 45,
        borderWidth: 1,
        borderColor: theme.COLORS.GREY,
        borderRadius: 5,
        paddingVertical: 0,
        paddingHorizontal: 15,
    },
    error: {
      fontSize: 12,
      fontWeight: "bold",
      color: theme.COLORS.ERROR,
    },
  });

  const onLayout = (event) => {
    let {width, height} = event.nativeEvent.layout
    setDimensions({dimensions: {width, height}})
  };

  return (
    <View style={styles.multipleInput} onLayout={onLayout}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType || 'default'}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.COLORS.GREY}
        onChangeText={onChangeText}
      />
      {errors && <Text style={styles.error}>{errors}</Text>}
    </View>
  );
};
