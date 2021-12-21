import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux';
import home from '../redux/actions/home'
import { theme } from '../styles/theme'


// Components 
import TextInput from '../components/TextInput'
import Button from '../components/Button'

// Material imports
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

// Formik
import { Formik, useFormik} from 'formik';

// Yup for validation
import * as Yup from "yup";

const useStyles = makeStyles({
    field: {
        minHeight: 30,
        marginTop: 8,
        // backgroundColor: theme.palette.background.light,
        "& .MuiOutlinedInput-adornedEnd": {
            paddingRight: "0px",
        },
    },
    inputGrid: {
        padding: "120px 50px 50px 50px",
    },
    gridText: {
        background: theme.appThemeColors.mainColor,
        position: 'relative'
    },
    gridContainer: {
        position: 'absolute',
        bottom: "10px",
        padding: "40px"
    },
    Logincontent: {
        // marginTop: "40px"
        height: "100vh"
    },
    text: {
        fontSize: "10px !important",
        textAlign: "center",
        padding: '10px',
        color: theme.appThemeColors.purplePrimaryColor
    },
    colortext: {
        color: theme.stateStatusColors.lightbackground,
        textAlign: 'center'
    },
    textfont: {
        fontSize: '20px !important'
    },
    textlogin: {
        fontSize: "12px !important",
        color: theme.appThemeColors.purplePrimaryColor
    },
    downtext: {
        position: "fixed",
        left: "60%",
        fontSize: "12px !important",
        bottom: '10px',
        color: theme.appThemeColors.purplePrimaryColor
    },
    m0: {
        marginTop: '10px'
    },
    errorty: {
        color: 'red',
        fontSize: "15px !important"

    },
    errormsg:{
        color: "red",
    textAlign: "center",
    marginTop: "10px !important",
    fontSize: "14px !important"
    },
  
    
})
function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordError, setShowhowPasswordError] = useState(false);
    const dispatch = useDispatch()
    const homeLogin = useSelector((state) => state.home.logindata);
    // const loading = useSelector((state) => state.auth.isLoading)
    // const autherror = useSelector((state) => state.auth.error)
    const [rememberMe,setRememberMe] = useState(false)
    const initialValues = {
        email: "",
        password: "",
    };
    let navigation = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .required("This field cannot be empty"),
        password: Yup.string()
            .required("This field cannot be empty")
            .matches(
                /^.*(?=.{6,})(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
                "Strong passwords have at least 8 characters and a mix of letter and numbers"
            ),
    });
    const onSubmit = (values) => {
        let payload = {
            email: values.email,
            password: values.password
        }
       // navigation("/dashboard")
       debugger
        dispatch(home.LoginUser(payload))    
    }

    useEffect(() => {
        if(homeLogin.id){
                navigation("/home")
        }
    },[homeLogin.id])

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    const classes = useStyles();

    return (
        <Grid item xs={6}>

                    <form onSubmit={formik.handleSubmit} style={{ marginTop: '50px' }}>
                        <TextInput
                            name="email"
                            placeholder="Email"
                            className={classes.field}
                            id="email"
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email && formik.errors.email
                                    ? Boolean(formik.errors.email)
                                    : null
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        >

                        </TextInput>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">
                                <Typography className={classes.errorty}>
                                    {formik.errors.email}
                                </Typography>
                            </div>
                        ) : null}

                        <TextInput
                            name="password"
                            placeholder="Password"
                            className={`${classes.field} parentclassname`}
                            id="password"
                            onChange={formik.handleChange}
                            error={
                                formik.touched.password && formik.errors.password
                                    ? Boolean(formik.errors.password)
                                    : null
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            type={showPassword ? "text" : "password"}
                            passwordText={"PasswordIcon"}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        ></TextInput>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error">
                                <Typography className={classes.errorty}>
                                    {formik.errors.password}
                                </Typography>
                            </div>
                        ) : null}
                        <div>
                            <Typography className={classes.text}>By signing in your agree to our Terms and Privacy</Typography>
                        </div>
                        <div className={classes.m0}>
                            <Button
                                // disabled={!(formik.isValid && formik.dirty && formik.values)}
                                type="submit"
                                color="btnPrimary"
                                width="100%"
                                text="Sign In"
                                data-rt-loginwithemail-signin="signin"
                            >

                            </Button>
                            {/* {autherror ? 
                            <Typography className={classes.errormsg}>Something went wrong please check your credentials</Typography> : "" } */}
                        </div>
                        <Grid style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                            <Typography className={classes.textlogin}>
                                <Checkbox label='My checkbox'
                                    labelStyle={{ color: 'white' }}
                                    iconStyle={{ fill: 'white' }}
                                />
                                Remember me</Typography>
                            <Typography className={classes.textlogin} style={{ marginTop: '10px' }}>Forgot password</Typography>
                        </Grid>

                    </form>
                    <Typography className={classes.downtext}>@2021 Aviz Networks Inc. All rights reserved</Typography>
                </Grid>
    );
}

export default Login;