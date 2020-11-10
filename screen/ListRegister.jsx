import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Block, DeckSwiper } from "galio-framework";
import theme from "../assets/theme";

const { width } = Dimensions.get("screen");

const ListRegisterScreen = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    props.navigation.addListener("focus", () => {
      fetchData();
    });
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://galleryghb.herokuapp.com/register")
      .then((res) => res.data)
      .then((res) => {
        let items = res?.data?.dataContent || [];
        setData(items);
        setLoading(false);
      });
  };

  return (
    <View>
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Block>
            {data.map((e, i) => (
              <View key={`element_list_${i}`} style={styles.box}>
                <Text>{e && JSON.stringify(e)}</Text>
              </View>
            ))}
          </Block>
        </ScrollView>
      </Block>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  box: {
    width: width / 1.5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.COLORS.GREY,
  },
});

export default ListRegisterScreen;
