import { Redirect } from "react-router-dom";
import { decodeToken } from "../utils/auth";

const ProtectedRoute = ({ children, role }) => {
    const payload = decodeToken();

    if (!payload) return <Redirect to="/user/login" />;
    if (role && payload.role !== role) return <Redirect to="/" />;

    return children;
};

export default ProtectedRoute;
