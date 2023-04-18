import axios from "axios";

class EventsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/events`,
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    getAllEvents(queries) {
        if (queries) {
            const { country, city, date, address, skip } = queries;

            return this.api.get(
                `/?country=${country}&city=${city}&date=${date}&address=${address}&skip=${skip}`
            );
        } else return this.api.get(`/`);
    }

    createEvent(data) {
        return this.api.post(`/create`, data);
    }

    getEvent(id) {
        return this.api.get(`/${id}`);
    }

    editEvent(id, data) {
        return this.api.put(`/${id}`, data);
    }

    deleteEvent(id) {
        return this.api.delete(`/${id}`);
    }
}
const eventsService = new EventsService();
export default eventsService;
