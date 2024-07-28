
import React from 'react';
import Header from './Header';
import Footer from './Footer'
import BottomFooter from './BottomFooter';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Header />
            <main>{children}</main>
            <Footer />
            <BottomFooter />
        </div>
    );
};

export default MainLayout;
