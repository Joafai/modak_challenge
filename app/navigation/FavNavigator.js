import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavArtScreen from "../screens/FavArtScreen";
import FavDetailScreen from "../screens/FavDetailScreen";

const Stack = createStackNavigator();

const FavNavigator = () => (
  <Stack.Navigator options={{ headerShown: false, presentation: "list" }}>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Fav"
      component={FavArtScreen}
    />
    <Stack.Screen
      options={{ nameShown: false }}
      name="FavDetail"
      component={FavDetailScreen}
    />
  </Stack.Navigator>
);

export default FavNavigator;
