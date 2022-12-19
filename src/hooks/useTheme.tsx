import { useContextSelector } from "use-context-selector";

import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
  const toggleTheme = useContextSelector(ThemeContext, context => context.toggleTheme);

  const currentTheme = useContextSelector(ThemeContext, context => context.currentTheme);

  return {
    toggleTheme,
    currentTheme,
  };
};
