import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoutes";
const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<p>Home</p>}
            />
            <Route
                path="/concerts"
                element={<p>concerts</p>}
            />
            <Route
                path="/login"
                element={<p>login</p>}
            />
            <Route element={<PrivateRoute />}>
                <Route
                    path="/logout"
                    element={<h1> logout </h1>}
                />
            </Route>
            <Route
                path="*"
                element={<ErrorPage />}
            />
        </Routes>
    );
};

export default AppRoutes;
