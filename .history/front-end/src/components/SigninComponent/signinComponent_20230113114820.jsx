import './signinComponent.css';
import Image from '.././assets/login_image.svg';

const SigninComponent = () => {
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
                        <input type="text" placeholder="Please enter your email address" />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" />
                    </div>
                    <div className='same-line-spaceBetween'>
                        <div className='same-line'>
                            <div style={{ marginRight: "5px" }}>
                                <input type="checkbox" name="remember" />
                            </div>
                            <label name="remember">Remember for 30days</label>
                        </div>
                        <a href='/'>Forget Password</a>
                    </div>
                    <button type="button" className='btn btn-success button-style'>Sign in</button>
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