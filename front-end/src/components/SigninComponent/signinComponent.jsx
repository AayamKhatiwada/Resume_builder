import './signinComponent.css';
import Image from '../assets/login_image.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SigninComponent = () => {

    const navigate = useNavigate();
    // const [error, seterror] = useState();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            alert(result['error']);
        } else if (result['user']) {
            alert("success")
            navigate('/');
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
                    <div>
                        <h3>Email</h3>
                        <input type="text" placeholder="Please enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                    <button type="button" className='btn btn-success button-style' onClick={() => login()}>Sign in</button>
                    <button type="button" className='btn btn-light button-style'>Sign in with Google</button>
                    <p className='text-center'>Dont't have an account? &nbsp;<a href="/register">Sign Up</a></p>
                </div>
                <div className="col-sm-6">
                    <img src={Image} alt="Voter_box" width="90%" className='image-style' />
                </div>
            </div>
        </div>
    );
}

export default SigninComponent;