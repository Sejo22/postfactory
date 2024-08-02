
import React from 'react';
import Header from './Header';
import Footer from './Footer'
import BottomFooter from './BottomFooter';
import theme from "../app/theme";
import { ThemeProvider } from '@mui/material/styles';


interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <Header />
                <main>{children}</main>
                <Footer />
                <BottomFooter />
            </div>
        </ThemeProvider>


    );
};

export default MainLayout;
