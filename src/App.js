import './App.css';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import React from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from './components/Sidebar';
import Header from './components/Header'
import Box from '@mui/material/Box';
import { listItemButtonClasses } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// import { theme } from "./styles/theme";
import AppRouter from './AppRouter';


// To import our store using provider
import { Provider } from "react-redux";
import store from "./redux/store";



function App() {
  const [data, setData] = React.useState({});
  // const openSideMenu = function openSideMenu(){
  //   alert('hi');
  // }

  function opensideMenu(item) {
    setData(item);
  }

  function ToopensideMenu(item) {
    opensideMenu(item);
  }

  return (
    // <Box sx={{ display: 'flex' }}>
    //   <Header openSideMenu={(item) => opensideMenu(item)}></Header>
    //   <Sidebar openSideMenu={(data) => opensideMenu(data)} data={data}></Sidebar>
    //   <ThemeProvider>
    //     <Provider store={store}>
    //       <Router >
    //         <AppRouter />
    //       </Router>
    //     </Provider>
    //   </ThemeProvider>
    // </Box>
    <ThemeProvider>
    <Provider store={store}>
    <Router >
      <AppRouter />
    </Router>
    </Provider>
  </ThemeProvider>
    

  );
}

export default App;
