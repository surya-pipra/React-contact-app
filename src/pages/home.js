import React from 'react';
// Components 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'
// Material imports
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { SignalCellularConnectedNoInternet0BarRounded } from '@mui/icons-material';

function Home() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="container">
                <h1>HOME</h1>
            </div>
        </Box>
    );
}

export default Home;