import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const storeToken = (token) => localStorage.setItem("authToken", token);
    const getToken = () => localStorage.getItem("authToken");

    useEffect(() => {
        authenticateUser();
    }, []);

    const authenticateUser = async () => {
        try {
            if (getToken()) {
                const user = await authService.verify(getToken());
                setUser(user);
                setIsLoading(false);
            } else {
                logout();
            }
        } catch (err) {
            logout();
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setUser(false);
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider
            value={{
                authenticateUser,
                user,
                logout,
                isLoading,
                storeToken,
                getToken,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper };
