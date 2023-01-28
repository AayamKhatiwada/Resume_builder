import './registerComponent.css';
import Image from '../assets/resume_builder.jpg';

const RegisterComponent = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={Image} alt="Voter_box" width="80%" className='image-style' style={{margin: "70px 20px"}}/>
                    </div>
                    <div className="col-sm-6 left-side-register">
                        <div className='text-center'>
                            <h2>Register Your account</h2>
                        </div>
                        <div>
                            <h5>First Name</h5>
                            <input type="text" placeholder="Please enter your first name" className="input-box rounded" />
                        </div>
                        <div>
                            <h5>Last Name</h5>
                            <input type="text" placeholder="Please enter your last name" className="input-box rounded" />
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input type="text" placeholder="Please enter your email address" className="input-box rounded" />
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input type="password" placeholder="Please enter your password" className="input-box rounded" />
                        </div>
                        <div>
                            <h5>Confirm Password</h5>
                            <input type="password" placeholder="Please enter your password" className="input-box rounded" />
                        </div>
                        <div>
                            <h5>Phone Number</h5>
                            <input type="text" placeholder="Please enter your phone number" className="input-box rounded" />
                        </div>
                        <div>
                            <h5>Gender
                                <span>
                                    <select name="gender" id="gender" style={{ margin: "5px 15px" }}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </span>
                            </h5>
                        </div>
                        <button type="button" className='btn btn-success button-style' style={{ marginTop: "20px" }}>Register</button>
                        <button type="button" className='btn btn-light button-style'>Sign Up with Google</button>
                        <p className='text-center'>Already have an account? &nbsp;<a href="/sign-in">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;