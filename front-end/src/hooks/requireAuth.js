import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "../store/user/user-selector";

function RequireAuth({ children }) {
    const authed = useSelector(selectCurrentUser);
    const location = useLocation();

    return !(Object.keys(authed).length === 0) ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}

export default RequireAuth;