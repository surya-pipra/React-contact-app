import React from 'react';

// Components 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'

// Material imports
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Home() {
    function opensideMenu(item) {
    }

    function ToopensideMenu(item) {
        opensideMenu(item);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <Header openSideMenu={(item) => opensideMenu(item)}></Header>
            <Sidebar openSideMenu={(data) => opensideMenu()}></Sidebar>
            <h1>HOME</h1>
        </Box>
    );
}

export default Home;