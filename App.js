import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomNavigation from "./routes/BottomNavigation";
import LoginForm from "./screens/LoginForm.js";
import LoginHome from "./screens/LoginHome.js";
import Register from "./screens/Register.js";
import RegisterConfirmation from "./screens/RegisterConfirmation";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='LoginHome'
        component={LoginHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Confirmacion'
        component={RegisterConfirmation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoginForm'
        component={LoginForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='TabNavigator'
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
