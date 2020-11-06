import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Card, Block } from "galio-framework";
import theme from "../assets/theme";

const { width } = Dimensions.get("screen");

export const Cards = ({ item }) => {
  return (
    <Card
      flex
      borderless
      shadowColor={theme.COLORS.BLACK}
      titleColor={item.full ? theme.COLORS.WHITE : theme.COLORS.BLACK}
      style={styles.card}
      title={item.title}
      caption={item.caption}
      location={item.location}
      avatar={`${item.avatar}`}
      image={item.image}
      imageStyle={[item.padded ? styles.rounded : null]}
      imageBlockStyle={[
        item.padded ? { padding: theme.SIZES.BASE / 2 } : null,
        item.full ? null : styles.noRadius,
      ]}
      footerStyle={item.full ? styles.full : null}
    />
  );
};

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
});
