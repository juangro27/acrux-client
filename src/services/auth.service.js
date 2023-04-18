import axios from "axios";

class AuthService {
    static _instance;

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    signup(data) {
        return this.api.post(`/signup`, data);
    }

    login(data) {
        return this.api.post(`/login`, data);
    }

    verify(token) {
        return this.api.get(`/verify`, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }
}
const authService = new AuthService();
export default authService;