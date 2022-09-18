import React from 'react';
import Home from '../pages/home';
import Footer from './footer';
import NavBar from './navbar';

const MainLayout = (props) => {
    return (
        <div>
            <NavBar/>
            <Home/>
            {props.childern}
            <Footer/>
        </div>
    );
}

export default MainLayout;
