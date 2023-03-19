import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "../store/user/user-selector";

function WithoutAuthOnly({ children }) {
    const authed = useSelector(selectCurrentUser);
    const { path } = useLocation().state;

    return Object.keys(authed).length === 0 ? (
        children
    ) : (
        <Navigate to={path} />
    );
}

export default WithoutAuthOnly;