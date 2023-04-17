import './registerComponent.css';
import Image from '../assets/resume_builder.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setUserError } from '../../store/user/user-action';
import { ErrorNoty } from '../../hooks/notifications';

const RegisterComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const register = async () => {
        let user = { fname, lname, email, phoneNo, password };
        if (fname !== '' && fname !== '' && email !== '' && phoneNo !== '' && password !== '' && cpassword !== '') {
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
                alert("success")
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
        }else if (!lname) {
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
        } else if (!phoneNo) {
            ErrorNoty("Cannot leave phone number blank")
        } else if (phoneNo[0] === " ") {
            ErrorNoty("Phone number must not start with space")
        } else if (phoneNo.length !== 10) {
            ErrorNoty("Phone number must be of 10 digits")
        } else {
            register()
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" style={{margin: "auto"}}>
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
                            <TextField
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                        <div className='form-text-field'>
                            <TextField
                                label="Confirm Password"
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                        <div className='form-text-field'>
                            <TextField
                                label="Phone Number"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </div>
                        <button type="button" className='btn btn-success button-style' onClick={() => checkInputsAndRegister()}>Register</button>
                        <button type="button" className='btn btn-light button-style'>Sign Up with Google</button>
                        <p className='text-center m-0'>Already have an account? &nbsp;<a href="/sign-in">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;