import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import newEvent from "./screens/newEvent.js";
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
        component={newEvent}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
