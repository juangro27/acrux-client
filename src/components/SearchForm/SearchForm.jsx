import { useState } from "react";
import eventsService from "../../services/events.service";

const SearchForm = ({ setEvents }) => {
    const [errors, setErrors] = useState([]);

    const [search, setSearch] = useState({
        hosts: "",
        date: "",
        address: "",
        city: "",
        country: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await eventsService.getAllEvents(search);
            const { events } = data.data;
            setEvents(events);
            setSearch({
                hosts: "",
                date: "",
                address: "",
                city: "",
                country: "",
            });
        } catch (err) {
            setErrors(err.response.data.errorMessages);
        }
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setSearch({ ...search, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            {errors.length >= 1 && (
                <h1 className="bg-red-700 text-zinc-50 text-center rounded-md py-2">
                    {errors}
                </h1>
            )}
            <div className="py-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label
                        htmlFor="hosts"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Host:
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="hosts"
                            id="hosts"
                            onChange={handleInputChange}
                            value={search.hosts}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                        htmlFor="date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            onChange={handleInputChange}
                            value={search.date}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="col-span-full">
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="address"
                            id="address"
                            onChange={handleInputChange}
                            value={search.address}
                            autoComplete="address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            onChange={handleInputChange}
                            value={search.city}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Country
                    </label>
                    <div className="mt-2">
                        <input
                            type="country"
                            name="country"
                            id="country"
                            onChange={handleInputChange}
                            value={search.country}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button className="sm:col-span-6 px-5 m-5 py-2 rounded-md text-teal-100 bg-teal-600 hover:bg-teal-700">
                    Search
                </button>
            </div>
        </form>
    );
};
export default SearchForm;
