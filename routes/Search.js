import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MusicCategory from "./screens/MusicCategory.js";
import Search from "./screens/Search.js";
import VerMas from "./screens/VerMas.js";

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='Buscar'
        component={Search}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name='MusicCategory'
        component={MusicCategory}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name='VerMas'
        component={VerMas}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator