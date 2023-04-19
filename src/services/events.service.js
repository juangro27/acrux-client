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
        const queryObj = {};
        if (queries) {
            const { country, city, date, address, hosts, skip } = queries;
            if (country) queryObj.country = country;
            if (city) queryObj.city = city;
            if (date) queryObj.date = date;
            if (address) queryObj.address = address;
            if (hosts) queryObj.hosts = hosts;
            if (skip) queryObj.skip = skip;
        }
        const queryString = new URLSearchParams(queryObj).toString();
        return this.api.get(`/?${queryString}`);
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
