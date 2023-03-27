import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IsAuthed from '../../hooks/isAuthed';
import { SuccessNoty } from '../../hooks/notifications';
import { removeUser } from '../../store/user/user-action';
import { selectCurrentUser } from '../../store/user/user-selector';
import Logo from '../assets/logo.png';
import './navigationComponentGuest.css';

const NavigationComponentGuest = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);

    const logout = () => {
        SuccessNoty("Logout Successful")
        dispatch(removeUser())
    }

    return (
        <div className='nav-main-div'>
            <div className='nav-logo-text-div'>
                <img src={Logo} alt="logo" width="100px" />
                <h2 className='nav-main-title px-5'>Booster Up</h2>
            </div>

            <div className='nav-button-div'>
                {
                    !IsAuthed(user) ? (
                        <>
                            <a><button className='nav-register-btn' onClick={() => navigate('/register', { state: { path: window.location.pathname } })}>Register</button></a>
                            <a><button className='nav-login-btn' onClick={() => navigate('/sign-in', { state: { path: window.location.pathname } })}>Log In</button></a>
                        </>
                    ) : (
                        <button className='nav-login-btn' onClick={logout}>Log Out</button>

                    )
                }

            </div>
        </div>
    );
}

export default NavigationComponentGuest;