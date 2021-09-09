import React from 'react';
import Head from 'next/head';
import GoTop from './GoTop';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}

            <GoTop scrollStepInPx='100' delayInMs='10.50' />
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
