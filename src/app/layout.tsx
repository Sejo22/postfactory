import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";



export const metadata: Metadata = {
  title: "PostFactory - Premium Social Media Management Services",
  description: "Revolutionize your online presence with our premium social media management services, starting at just $89.99/month!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
