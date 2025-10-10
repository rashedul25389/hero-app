import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import './Root.css';

const Roots = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {navigation.state === 'loading' ? <Loading /> : <Outlet />}
            <Footer></Footer>
        </div>
    );
};

export default Roots;
