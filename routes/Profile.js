import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NewEvent from "./screens/NewEvent.js";
import Profile from "./screens/Profile.js";
import Settings from "./screens/Settings.js";

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='Perfil'
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name='VerMas'
        component={VerMas}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name='Ajustes'
        component={Settings}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name='newEvent'
        component={NewEvent}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
