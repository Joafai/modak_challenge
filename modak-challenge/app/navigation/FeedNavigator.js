import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../screens/FeedScreen";
import FeedDetailScreen from "../screens/FeedDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator options={{ headerShown: false, presentation: "list" }}>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Feed"
      component={FeedScreen}
    />
    <Stack.Screen
      options={{ nameShown: false }}
      name="FeedDetail"
      component={FeedDetailScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
