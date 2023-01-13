import Logo from '.././assets/logo.png';
import './navigationComponentGuest.css';

const NavigationComponentGuest = () => {
    return (
        <div className='main-div'>
            <div className='logo-text-div'>
                <img src={Logo} alt="logo" width="100px" />
                <h2 style={{ color: "#ff4911" }}>Booster Up</h2>
            </div>

            <div className='button-div'>
                <a href="/register"><button>Sign Up</button></a>
                <a href="/sign-in"><button>Sign In</button></a>
            </div>
        </div>
    );
}

export default NavigationComponentGuest;