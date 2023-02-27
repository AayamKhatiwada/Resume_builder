import { useDispatch, useSelector } from 'react-redux';
import IsAuthed from '../../hooks/isAuthed';
import { removeUser } from '../../store/user/user-action';
import { selectCurrentUser } from '../../store/user/user-selector';
import Logo from '../assets/logo.png';
import './navigationComponentGuest.css';

const NavigationComponentGuest = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);

    const logout = () => {
        dispatch(removeUser())
    }

    return (
        <div className='nav-main-div'>
            <div className='nav-logo-text-div'>
                <img src={Logo} alt="logo" width="100px" />
                <h2 className='nav-main-title'>Booster Up</h2>
            </div>

            <div className='nav-button-div'>
                {
                    IsAuthed(user) ? (
                        <>
                            <a href="/register"><button className='nav-register-btn'>Register</button></a>
                            <a href="/sign-in"><button className='nav-login-btn'>Log In</button></a>
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