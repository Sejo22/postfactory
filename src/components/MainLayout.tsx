
import React from 'react';
import Header from './Header';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;
