import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import AddMovieScreen from "./screen/AddMovie";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home">
        {(props) => (
          <View style={styles.container}>
            <HomeScreen {...props} />
            <StatusBar style="auto" />
          </View>
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const MovieStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Movie">
        {(props) => (
          <View style={styles.container}>
            <AddMovieScreen {...props} />
            <StatusBar style="auto" />
          </View>
        )}
      </SettingsStack.Screen>
    </SettingsStack.Navigator>
  );
};

const Route = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Movie") {
              iconName = focused ? "ios-list-box" : "ios-movie";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Movie" component={MovieStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Route;
