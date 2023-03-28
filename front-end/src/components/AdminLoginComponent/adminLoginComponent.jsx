import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorNoty } from '../../hooks/notifications';
import './adminLoginComponent.css'

const AdminLoginComponent = () => {

    const navigate = useNavigate()
    const [admin, setAdmin] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () => {
        if (admin === "admin" && password === "admin") {
            navigate('/dashboard')
        } else if (admin === "admin") {
            ErrorNoty("Wrong Password")
        } else if (password === "admin") {
            ErrorNoty("Wrong admin")
        } else {
            ErrorNoty("Wrong admin and password")
        }
    }

    return (
        <>
            <div className="admin-login">
                <h1>Admin Login</h1>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" value={admin} onChange={(e) => setAdmin(e.target.value)} />
                <label for="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Log in" onClick={() => onSubmit()} />
            </div>
        </>
    );
}

export default AdminLoginComponent;