import './registerComponent.css';
import Image from '../assets/resume_builder.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                        <div>
                            <h5>First Name</h5>
                            <input type="text" placeholder="Please enter your first name" className="input-box rounded" value={fname} onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div>
                            <h5>Last Name</h5>
                            <input type="text" placeholder="Please enter your last name" className="input-box rounded" value={lname} onChange={(e) => setLname(e.target.value)} />
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input type="text" placeholder="Please enter your email address" className="input-box rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input type="password" placeholder="Please enter your password" className="input-box rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <h5>Confirm Password</h5>
                            <input type="password" placeholder="Please enter your password" className="input-box rounded" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                        </div>
                        <div>
                            <h5>Phone Number</h5>
                            <input type="text" placeholder="Please enter your phone number" className="input-box rounded" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                        </div>
                        <button type="button" className='btn btn-success button-style' style={{ marginTop: "20px" }} onClick={() => register()}>Register</button>
                        <button type="button" className='btn btn-light button-style'>Sign Up with Google</button>
                        <p className='text-center'>Already have an account? &nbsp;<a href="/sign-in">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;