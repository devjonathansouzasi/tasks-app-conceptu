const DarkTheme = {
  type: "dark",
  colors: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    primary: "#8E26E3",
    secondary: "#26e38e",
    background: {
      default: "#1D1D24",
      paper: "#24242D",
    },
    gray: {
      lighter: "#4A4A58",
      light: "#ddd",
      regular: "#dadada",
      dark: "#FFF",
    },
    info: "#0297D8",
    success: "#55E5A9",
    warning: "#FF9F43",
    error: "#EA5455",
  },
};

type DarkThemeProps = typeof DarkTheme;

export { DarkTheme, DarkThemeProps };
