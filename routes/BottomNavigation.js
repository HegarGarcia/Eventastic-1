import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeStackNavigator from "./Home";
import ProfileStackNavigator from "./Profile";
import SearchStackNavigator from "./Search";

const BottomTabs = createBottomTabNavigator();

const iconMap = {
  HomeStack: "home",
  SearchStack: "search",
  ProfileStack: "user",
};

const BottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = iconMap[route.name];
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "#fcba03",
        },
      }}>
      <BottomTabs.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={{ title: "Inicio" }}
      />
      <BottomTabs.Screen
        name='SearchStack'
        component={SearchStackNavigator}
        options={{ title: "Buscar" }}
      />
      <BottomTabs.Screen
        name='ProfileStack'
        component={ProfileStackNavigator}
        options={{ title: "Perfil" }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigation;
