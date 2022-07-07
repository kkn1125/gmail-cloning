import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

let theme: Theme = createTheme({
  palette: {
    // primary: {
    //   main: "#52993a",
    // },
    secondary: {
      main: "#797979",
    },
    // info: {
    //   main: "#81993a",
    // },
    // success: {
    //   main: "#3a5299",
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1920,
    },
  },
});

let darkTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#52993a",
    },
    secondary: {
      main: "#813a99",
    },
    info: {
      main: "#81993a",
    },
    success: {
      main: "#3a5299",
    },
  },
});

theme = responsiveFontSizes(theme);

// const getDesignTokens = (mode: PaletteMode) => ({
//   mode,
//   ...(mode === "light" ? theme : darkTheme),
// });

export default theme;
