import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoutes";
import LoginPage from "../pages/LoginPage/LoginPage";
import EventListPage from "../pages/EventListPage/EventListPage";
import EventDetails from "../components/EventDetails/EventDetails.jsx";
import SignupPage from "../pages/SignupPage/SignupPage";
import HomePage from "../pages/HomePage/HomePage";
import CreateEventPage from "../pages/CreateEventPage/CreateEventPage";
const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/concerts"
                element={<EventListPage />}
            />
            <Route
                path="/concerts/:id"
                element={<EventDetails />}
            />
            <Route
                path="/login"
                element={<LoginPage />}
            />
            <Route
                path="/signup"
                element={<SignupPage />}
            />
            <Route element={<PrivateRoute />}>
                <Route
                    path="/logout"
                    element={<HomePage />}
                />
                <Route
                    path="/concerts/create"
                    element={<CreateEventPage />}
                />
            </Route>
            <Route
                path="*"
                element={<ErrorPage />}
            />
            <Route
                path="/404"
                element={<ErrorPage />}
            />
        </Routes>
    );
};

export default AppRoutes;
