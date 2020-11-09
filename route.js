import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from "./assets/theme";

// import screen
import HomeScreen from "./screen/HomeScreen";
import RegisterScreen from "./screen/RegisterScreen";
import SuscessScreen from "./screen/SuscessScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const RegisterStack = createStackNavigator();
// const HomeStack = createStackNavigator();

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

const RegisterStackScreen = () => {
  return (
    <RegisterStack.Navigator headerMode='none'>
      <RegisterStack.Screen name="Register">
        {(props) => (
          <View style={styles.container}>
            <RegisterScreen {...props} />
            <StatusBar style="auto" />
          </View>
        )}
      </RegisterStack.Screen>
      <RegisterStack.Screen name="Suscess">
        {(props) => (
          <View style={styles.container}>
            <SuscessScreen {...props} />
            <StatusBar style="auto" />
          </View>
        )}
      </RegisterStack.Screen>
    </RegisterStack.Navigator>
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
                ? `${Platform.OS === "ios" ? "ios" : "md"}-home`
                : `${Platform.OS === "ios" ? "ios" : "md"}-home`;
            } else if (route.name === `Register`) {
              iconName = focused
                ? `${Platform.OS === "ios" ? "ios" : "md"}-add-circle`
                : `${Platform.OS === "ios" ? "ios" : "md"}-add-circle-outline`;
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? theme.COLORS.PRIMARY : color}
              />
            );
          },
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text style={focused ? styles.labelActive : styles.labelDefault}>
                {route.name}
              </Text>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Register" component={RegisterStackScreen} />
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
  labelDefault: {
    color: theme.COLORS.SECONDARY,
    fontWeight: 'bold'
  },
  labelActive: {
    color: theme.COLORS.PRIMARY,
    fontWeight: 'bold'
  },
});

export default Route;
