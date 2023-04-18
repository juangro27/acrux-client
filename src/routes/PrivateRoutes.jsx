import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../contexts/auth.context";

const PrivateRoute = () => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Spinner />;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
