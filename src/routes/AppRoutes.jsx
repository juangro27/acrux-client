import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoutes";
import LoginPage from "../pages/LoginPage/LoginPage";
import ConcertsListPage from "../pages/ConcertsListPage/ConcertsListPage";
import EventDetails from "../components/EventDetails/EventDetails.jsx";
const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<p>Home</p>}
            />
            <Route
                path="/concerts"
                element={<ConcertsListPage />}
            />
            <Route
                path="/concerts/:id"
                element={<EventDetails />}
            />
            <Route
                path="/login"
                element={<LoginPage />}
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
