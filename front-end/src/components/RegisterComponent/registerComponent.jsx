import './registerComponent.css';
import Image from '../assets/resume_builder.jpg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setUserError } from '../../store/user/user-action';
import { ErrorNoty, SuccessNoty } from '../../hooks/notifications';
import InputAdornment from '@mui/material/InputAdornment';
import { FormControl, IconButton, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import jwt_decode from "jwt-decode"

const RegisterComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [showCpassword, setShowCpassword] = useState(false);
    const handleClickShowCpassword = () => setShowCpassword((show) => !show);

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "365026754391-98sqgrid92rv2235v67aqkim7bgf4o6u.apps.googleusercontent.com",
            callback: handleCallbackResponse,
            oauth2_include_granted_scopes: true,
        })

        google.accounts.id.renderButton(
            document.getElementById("signInWithDiv"),
            {
                theme: "outline", size: "large", custom_styles: {
                    width: "100%",
                },
            }
        )

    }, [])

    const handleCallbackResponse = (response) => {
        // console.log("Encoded JWT ID token: " + response.credential)
        var userObject = jwt_decode(response.credential)
        setFname(userObject.given_name)
        setLname(userObject.family_name)
        setEmail(userObject.email)
     }

    const register = async () => {
        let user = { fname, lname, email, password };
        if (fname !== '' && fname !== '' && email !== '' && password !== '' && cpassword !== '') {
            let result = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(user)
            });
            result = await result.json();
            if (result['error']) {
                dispatch(setUserError(result['error']));
                alert(result['error'])
            } else if (result['user']) {
                SuccessNoty("Successfull register a user")
                dispatch(setCurrentUser(result['user']));
                navigate('/');
            }
        } else {
            alert('Please fill all the form');
        }
    }

    const checkInputsAndRegister = () => {
        if (!fname) {
            ErrorNoty("Cannot leave first name blank")
        } else if (fname[0] === " ") {
            ErrorNoty("First name must not start with space")
        } else if (fname.length < 3) {
            ErrorNoty("First name must be more than or equal to 3 letter")
        } else if (!lname) {
            ErrorNoty("Cannot leave last name blank")
        } else if (lname[0] === " ") {
            ErrorNoty("last name must not start with space")
        } else if (lname.length < 3) {
            ErrorNoty("First name must be more than or equal to 3 letter")
        } else if (!(/\S+@\S+\.\S+/.test(email))) {
            ErrorNoty("Invalid email address.");
        } else if (!password) {
            ErrorNoty("Cannot leave password blank")
        } else if (password[0] === " ") {
            ErrorNoty("Password must not start with space")
        } else if (password.length < 3) {
            ErrorNoty("Password must be more than or equal to 3 letter")
        } else if (cpassword !== password) {
            ErrorNoty("Mismatch password and conform password")
        } else {
            register()
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" style={{ margin: "auto" }}>
                        <img src={Image} alt="Voter_box" width="80%" className='image-style' style={{ margin: "70px 20px" }} />
                    </div>
                    <div className="col-sm-6 left-side-register">
                        <div className='text-center'>
                            <h2>Register Your account</h2>
                        </div>
                        <div className='form-text-field' style={{ marginTop: "3rem" }} >
                            <TextField
                                label="First Name"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                        <div className='form-text-field'>
                            <TextField
                                label="Last Name"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                        <div className='form-text-field'>
                            <TextField
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                        <div className='form-text-field'>
                            <FormControl sx={{ fontSize: 14, width: "100%" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                        </div>
                        <div className='form-text-field'>
                            <FormControl sx={{ fontSize: 14, width: "100%" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showCpassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowCpassword}
                                                edge="end"
                                            >
                                                {showCpassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Conform Password"
                                    value={cpassword}
                                    onChange={(e) => setCpassword(e.target.value)}
                                />
                            </FormControl>
                        </div>
                        <button type="button" className='btn btn-success button-style' onClick={() => checkInputsAndRegister()}>Register</button>
                        <button type="button" id="signInWithDiv" style={{width: "100%", border: "none"}}></button>
                        <p className='text-center m-0'>Already have an account? &nbsp;<a href="/sign-in">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;