import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../store/user/user-selector";

function WithoutAuthOnly({ children }) {
    const authed = useSelector(selectCurrentUser);

    return Object.keys(authed).length === 0 ? (
        children
    ) : (
        <Navigate to="/" replace />
    );
}

export default WithoutAuthOnly;