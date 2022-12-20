import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "./src/contexts/ThemeContext";
import { useAuthentication } from "./src/hooks/useAuthentication";
import RootRoutes from "./src/routes";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { loading } = useAuthentication();

  useEffect(() => {
    (async () => {
      if (!loading) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [loading]);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" animated />
      <ThemeProvider>
        <RootRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
