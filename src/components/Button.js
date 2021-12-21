import React from "react";
import { Button as MuiButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {theme} from '../styles/theme'
import { useDispatch ,useSelector} from 'react-redux';

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
  btnPrimary: {
    backgroundColor: theme.appThemeColors.mainColor,
    height: theme.btnPrimary.height,
    width: (props) => props.width || theme.btnPrimary.width,
    textTransform:"capitalize !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "center",
    fontWeight: 500,
    "& .MuiButton-label": {
      color: theme.btnPrimary.contrastText,
      textTransform: "none !important",
      whiteSpace:'nowrap'
    },
    "&:hover": {
      backgroundColor: theme.btnPrimary.mid,
      boxShadow: "none",
    },
    [theme.breakpoints.up("tablet")]:{
      height:"48px"
    }
  },
  loaderbtn:{
    position: "absolute",
    right: "10px",
   }
  
})

export default function Button(props) {
  const { text, size, color, label, variant, onClick, width, ...other } = props;
  const classes = useStyles(props);
  // const loading = useSelector((state) => state.auth.isLoading)

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      className={`${classes[color]}`}
    >
      
    {text}
      {/* {loading ? <LoaderLogin loaderbtn={classes.loaderbtn}/> : "" } */}
    </MuiButton>
  );
}
