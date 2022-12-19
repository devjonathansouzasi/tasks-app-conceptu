import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import RootRoutes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" animated />
      <RootRoutes />
    </NavigationContainer>
  );
}
