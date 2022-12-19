const LightTheme = {
  type: "light",
  colors: {
    common: {
      white: "#FFFFFF",
      black: "#000",
    },
    primary: "#8E26E3",
    secondary: "#26e38e",
    background: {
      default: "#FFFFFF",
      paper: "#F2F2F8",
    },
    gray: {
      lighter: "#DDDEEE",
      light: "#6E6B7B",
      regular: "#5C5C6C",
      dark: "#37474F",
    },
    info: "#0297D8",
    success: "#55E5A9",
    warning: "#FF9F43",
    error: "#EA5455",
  },
} as const;

type LightThemeProps = typeof LightTheme;

export { LightTheme, LightThemeProps };
