import { StyleSheet } from "react-native";

import AppNavigator from "./modak-challenge/app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./modak-challenge/app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
