import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home.js";
import VerMas from "./screens/VerMas.js";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Inicio'
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='VerMas'
        component={VerMas}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
