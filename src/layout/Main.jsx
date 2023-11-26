import React, { useEffect } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    
    return (
        <div>
            <Navbar></Navbar>
           <div className='pt-16'>
                <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;