"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    accentGradient?: string;
    iconColor?: string;
    text?: string;
  }

  interface SimplePaletteColorOptions {
    accentGradient?: string;
    iconColor?: string;
    text?: string;
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#09050e",
      accentGradient: "linear-gradient(90deg,#4285F4, #7832D1)",
      iconColor: "#4285F4",
      text: "#666",
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
      lineHeight: "1.4em",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 32,
        lineHeight: "1.4em",
      },
    },
    h2: {
      color: "#160C28",
      fontSize: 40,
      lineHeight: "1.4em",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 28,
        lineHeight: "1.4em",
      },
    },
    h3: {
      color: "#160C28",
      fontSize: 32,
      lineHeight: "1.4em",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 24,
        lineHeight: "1.4em",
      },
    },
    h4: {
      color: "#160C28",
      fontSize: 28,
      lineHeight: "1.4em",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 22,
        lineHeight: "1.4em",
      },
    },
    h5: {
      color: "#160C28",
      fontSize: 24,
      lineHeight: "1.4em",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 20,
        lineHeight: "1.4em",
      },
    },
    h6: {
      color: "#160C28",
      fontSize: 20,
      lineHeight: "1.4em",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: 18,
        lineHeight: "1.4em",
      },
    },
    body1: {
      color: "#666",
    },
    body2: {
      color: "#666",
    },
    caption: {
      color: "#666",
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
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            display: "none",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          borderRadius: 8,
          transition: "all 0.3s ease",
          paddingBlock: 12,
          paddingInline: 32,
          fontSize: 16,
          lineHeight: "24px",
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.iconColor,
            color: "#fff",
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
          "&:not(.Mui-selected)": {
            backgroundColor: "transparent",
            color: theme.palette.primary.main,
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
          "&.MuiButtonBase-root": {
            minHeight: "unset",
          },
        }),
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
