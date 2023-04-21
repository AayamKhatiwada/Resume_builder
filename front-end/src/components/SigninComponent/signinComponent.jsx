import './signinComponent.css';
import Image from '../assets/login_image.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setUserError } from '../../store/user/user-action';
import { ErrorNoty, SuccessNoty } from '../../hooks/notifications';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, OutlinedInput, IconButton, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const SigninComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const login = async () => {
        let user = { email, password };
        let result = await fetch("http://127.0.0.1:8000/api/login", {
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
            ErrorNoty(result['error'])
        } else if (result['user']) {
            dispatch(setCurrentUser(result['user']));
            SuccessNoty("Login Successful")
        }
    }

    const checkInputs = () => {
        // Check if email is valid
        if (!(/\S+@\S+\.\S+/.test(email))) {
            ErrorNoty("Invalid email address.");
        } else {
            login()
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 left-side">
                    <div className='text-center'>
                        <h1>Welcome Back</h1>
                        <p>Welcome back please enter your details</p>
                    </div>
                    <div className='signin-textfield'>
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            InputProps={{ style: { fontSize: 18 } }}
                            InputLabelProps={{ style: { fontSize: 18 } }}
                        />
                    </div>
                    <div className='signin-textfield'>
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
                    <div className='same-line-spaceBetween'>
                        <div className='same-line'>
                            <div style={{ marginRight: "5px" }}>
                                <input type="checkbox" name="remember" id="remember" />
                            </div>
                            <label name="remember" htmlFor="remember">Remember me</label>
                        </div>
                        <a href='/'>Forget Password</a>
                    </div>
                    <button type="button" className='btn btn-success button-style' onClick={() => checkInputs()}>Sign in</button>
                    <button type="button" className='btn btn-light button-style'>Sign in with Google</button>
                    <div className='text-center'>Dont't have an account? &nbsp;<p onClick={() => navigate('/register', { state: { path: window.location.pathname } })}>Sign Up</p></div>
                </div>
                <div className="col-sm-6" style={{objectFit: "contain"}}>
                    <img src={Image} alt="Voter_box" width="80%" className='image-style' />
                </div>
            </div>
        </div>
    );
}

export default SigninComponent;