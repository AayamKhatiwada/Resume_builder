import Logo from '../assets/logo.png';
import './navigationComponentGuest.css';

const NavigationComponentGuest = () => {
    return (
        <div className='nav-main-div'>
            <div className='nav-logo-text-div'>
                <img src={Logo} alt="logo" width="100px" />
                <h2 className='nav-main-title'>Booster Up</h2>
            </div>

            <div className='nav-button-div'>
                <a href="/register"><button className='nav-register-btn'>Register</button></a>
                <a href="/sign-in"><button className='nav-login-btn'>Log In</button></a>
            </div>
        </div>
    );
}

export default NavigationComponentGuest;