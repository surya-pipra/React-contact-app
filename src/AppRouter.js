// Route imports
import React,{useState} from 'react'
import { BrowserRouter as Router, useRoutes,Navigate } from "react-router-dom";
import HOME from './pages/home';
import ABOUT from './pages/about';
import USERS from './pages/users';


const AppRouter = () => {
    //const isLoggedIn = useSelector((state) => state.auth.logindata)
    const isLoggedIn = JSON.parse(localStorage.getItem('user'))
  
    let routes = useRoutes([
        { path: '/', element: <Navigate to="/home" /> },
        { path: "/home", element:<HOME/> },
        { path: "/about", element:<ABOUT/> },
        { path: "/users", element:<USERS/> },
    ]);
      return routes;
  
    
  }
  
  export default AppRouter;
