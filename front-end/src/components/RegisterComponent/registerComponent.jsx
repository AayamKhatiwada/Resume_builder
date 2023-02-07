import './registerComponent.css';
import Image from '../assets/resume_builder.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const RegisterComponent = () => {

    const navigate = useNavigate();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [error, seterror] = useState();

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
                seterror(result['error']);
                alert(result['error'])
            } else if (result['user']) {
                alert("success")
                navigate('/');
            }
        } else {
            alert('Please fill all the form');
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
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
                        <button type="button" className='btn btn-success button-style' onClick={() => register()}>Register</button>
                        <button type="button" className='btn btn-light button-style'>Sign Up with Google</button>
                        <p className='text-center'>Already have an account? &nbsp;<a href="/sign-in">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;