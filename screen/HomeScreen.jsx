import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Block } from "galio-framework";
import { Cards } from "../component/Card";
import theme from "../assets/theme";
import moment from "moment";

const { width } = Dimensions.get("screen");

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://galleryghb.herokuapp.com/movie")
      .then((res) => res.data)
      .then((res) => {
        let items = (res?.data?.dataContent || []).map((e) => ({
          id: e._id,
          image: e.poster,
          title: e.title,
          caption: moment(e.lastupdated).fromNow(),
          avatar: "http://i.pravatar.cc/100",
        }));
        setData(items);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Block flex space="between">
            {data &&
              data.map((card) => (
                <Cards key={`card-${card.image}`} item={card} />
              ))}
          </Block>
        </ScrollView>
      </Block>
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

export default HomeScreen;
