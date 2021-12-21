import * as React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 380,
            sm: 768,
            md: 960,
            lg: 1280,
            xl: 1920,
            mobile: 380,
            tablet: 768,
            desktop: 1280
        }
    },
    appThemeColors: {
        mainColor: "#23036B !important", //900 purple,
        purplePrimaryColor: "#30009C !important", //800 purple
        purpleSecondaryColor: "#3700B4 !important",//700 purple
        blueMain: "#5600E9 !important",//600 purple
        bluePrimary: '#6200EF !important', // 500 purple
        blueSeconadary: "#7F39FC !important",//400 purple
        light: "#985EFE !important",//300 purple
        lightPurple: "#BB86FC !important",// 200 purple
        toolightColor: "#DBB3FF !important", // 100 purple
        lightmaincolor: "#F2E7FE !important" // 50 purple
    },

    stateStatusColors: {
        error: "#DB4437",
        lightred: "EC9A93",
        primarygreen: "#0F9D58",
        lightgreen: "#8BF4C1",
        yellow: "#F4B400",
        lightyellow: "#FFDE80",
        blue: "#4285F4",
        lightblue: "#87B1F8",
        lightbackground: "#FBFBFB"
    },
    typography: {

        input: {
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textalign: "left",
            color: "#2F2F2F",
            placeholderColor: "#787878",
        },
    },
    
    btnPrimary: {
        light: "#EBEFF8",
        main: "#1789FC",
        mid: "#61A2E4",
        contrastText: "#fff",
        tertiaryText: "#787878",
        width: "334px",
        height: "40px !important",
      },
    //   error:{
    //     color:'red'
    //   }
})

export { theme }