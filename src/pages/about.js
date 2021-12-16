import React from 'react';

// Components 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'

// Material imports
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function AboutUs() {
    function opensideMenu(item) {
    }

    function ToopensideMenu(item) {
        opensideMenu(item);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <Header openSideMenu={(item) => opensideMenu(item)}></Header>
            <Sidebar openSideMenu={(data) => opensideMenu()}></Sidebar>
            <h1>ABOUT US</h1>
        </Box>
    );
}

export default AboutUs;