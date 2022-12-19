import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "./src/contexts/ThemeContext";
import RootRoutes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" animated />
      <ThemeProvider>
        <RootRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
