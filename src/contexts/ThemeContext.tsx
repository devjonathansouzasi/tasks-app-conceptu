import React, { useCallback, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createContext } from "use-context-selector";

import { expo } from "../../app.json";
import { LightTheme, DarkTheme } from "../themes";

const APP_KEY_NAME = expo.name;

export interface ThemeContextProps {
  currentTheme: "light" | "dark";
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  value?: ThemeContextProps;
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    (async () => {
      const persistedTheme: any = await AsyncStorage.getItem(`${APP_KEY_NAME}:THEME`);
      if (persistedTheme) {
        setCurrentTheme(persistedTheme);
      }
    })();
  }, []);

  const toggleTheme = useCallback(async () => {
    const newState = currentTheme === "light" ? "dark" : "light";
    await AsyncStorage.setItem(`${APP_KEY_NAME}:THEME`, newState);
    setCurrentTheme(newState);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
      <StyledThemeProvider theme={currentTheme === "light" ? LightTheme : DarkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
