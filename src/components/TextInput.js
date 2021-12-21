import React from "react";
import { makeStyles } from '@mui/styles';
import { InputAdornment, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {theme} from '../styles/theme';

const useStyles = makeStyles({
  noBorder: {
    border: "none",
  },
  root: {
    "&.Mui-focused": {
      //border: `1px solid #1789FC`,
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
     // width:" 71%",
     // height: "40px",
  
      background:theme.appThemeColors.lightmaincolor,
    },
    "&.Mui-error": {
     // border: `1px solid #1789FC`,
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: "0px"
  },
  //width: "71% !important",
  //height: "40px",

  background: theme.appThemeColors.lightmaincolor,
  borderRadius:'10px !important',
  border: "none",
  },
  textField: {
    marginTop: "0px",
    marginBottom: "0px",
    minHeight: "30px",
   
  },
  input: {
    fontFamily: theme.typography.input.fontFamily,
    fontSize: theme.typography.input.fontSize,
    fontStyle: theme.typography.input.fontStyle,
    fontWeight: theme.typography.input.fontWeight,
    lineHeight: theme.typography.input.lineHeight,
    letterSpacing: theme.typography.input.letterSpacing,
    textalign: theme.typography.input.textalign,
    color: theme.appThemeColors.blueSeconadary,
    "&::placeholder": {
      color: theme.appThemeColors.blueSeconadary,
      background: theme.appThemeColors.lightmaincolor,
  },
  '&:hover': {
    outline:"none"
  }
    
  },
  IconVisible:{
  //  background: "#F8F8F8",
    padding: "14.9px",
    borderRadius:" 0px 4px 4px 0px",
    "& .MuiIconButton-root:hover":{
     // backgroundColor:'#F8F8F8'
    }
  
  },
  IconColor:{
    color:"#C4C4C4"
  }

});

const TextInput = (props) => {
  const {
    name,
    value,
    error = null,
    onChangeText,
    placeholder,
    id,
    type,
    showPassword,
    ...other
  } = props;

 
  const handleClickShowPassword = () => {
    props?.setShowPassword(!showPassword)
  };
  const handleMouseDownPassword = () => {
    props?.setShowPassword(true)
  }

  const classes = useStyles(props);

  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        autoComplete='off'
        fullWidth
        id={id}
        name={name}
        value={value}
        type={type}
        className={classes.textField}
        onChange={onChangeText}
        placeholder={placeholder}
        {...other}
        {...(error && { error: true, helperText: error })}
        InputProps={{
          className: classes.root,
          classes: { notchedOutline: classes.noBorder, input: classes.input },
          endAdornment: (
            props?.passwordText ? 
            <InputAdornment position="end">
              <IconButton
              className={classes.IconVisible}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
               // onMouseDown={handleMouseDownPassword}
              >
                {showPassword ?  <Visibility style={{color:'#1789FC'}}/> : <Visibility className={classes.IconColor}/> }
              </IconButton>
            </InputAdornment> : null
          )
        }}
      />
    </>
  );
};

export default TextInput;