import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
            <Header />
            <main>{children}</main>
            <Footer />
            <audio controls autoPlay loop>
                <source src="/path/to/your/background-music.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    );
};

export default Layout;
