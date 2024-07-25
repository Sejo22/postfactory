"use client";
import { LineWeight } from "@mui/icons-material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { Breakpoint } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    accentGradient?: string;
    iconColor?: string;
  }

  interface SimplePaletteColorOptions {
    accentGradient?: string;
    iconColor?: string;
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#09050e",
      accentGradient: "linear-gradient(90deg,#4285F4, #7832D1)",
      iconColor: "#4285F4",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      color: "#160C28",
      fontSize: 48,
      lineHeight: "64px",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 32,
        lineHeight: "48px",
      },
    },
    h2: {
      color: "#160C28",
      fontSize: 40,
      lineHeight: "56px",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 28,
        lineHeight: "36px",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 8,
          textTransform: "capitalize",
          fontWeight: 500,
          fontSize: 15,
          paddingInline: "32px",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
