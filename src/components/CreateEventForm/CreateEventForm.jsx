import { useState } from "react";
import eventsService from "../../services/events.service";
import { Link, useNavigate } from "react-router-dom";
import EventHosts from "../EventHosts/EventHosts";
import uploadService from "../../services/upload.service";
import { parseDate } from "../../utils/parseDate";

const CreateEventForm = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    const [event, setEvent] = useState({
        name: "",
        description: "",
        address: "",
        city: "",
        country: "",
        price: "",
        date: "",
        hosts: [],
        images: [],
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUploading(true);

        const formData = new FormData();

        for (const file of e.target.images.files) {
            formData.append("images", file);
        }

        try {
            const uploadRes = await uploadService.uploadImages(formData);
            const { cloudinary_url: imagesUrls } = uploadRes.data;

            const eventData = {
                ...event,
                images: imagesUrls,
            };

            const createRes = await eventsService.createEvent(eventData);
            const { data: concert } = createRes;
            navigate(`/concerts/${concert._id}`);

            setIsUploading(false);
        } catch (err) {
            setErrors(err.response.data.errorMessages);
            setIsUploading(false);
        }
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        if (name === "date") setEvent({ ...event, [name]: parseDate(value) });
        setEvent({ ...event, [name]: value });
    };

    const handleHostsChange = (newHosts) => {
        setEvent((prevState) => ({
            ...prevState,
            hosts: newHosts,
        }));
    };

    return (
        <>
            <form
                encType="multipart/form-data"
                className="w-full  md:px-40 lg:px-80"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1  sm:grid-cols-6 px-10 sm:px-20  w-full ">
                    {errors.length >= 1 && (
                        <h1 className="bg-red-700 text-zinc-50 text-center rounded-md py-2">
                            {errors}
                        </h1>
                    )}

                    {isUploading && (
                        <h1 className="bg-green-700 text-zinc-50 text-center rounded-md py-2">
                            Creating the concert
                        </h1>
                    )}

                    <div className="sm:col-span-6 mt-6  ">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={handleInputChange}
                                value={event.name}
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6 mt-6 ">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                cols="30"
                                rows="10"
                                required
                                onChange={handleInputChange}
                                defaultValue={event.description}
                            ></textarea>
                        </div>
                    </div>

                    <div className="sm:col-span-6 mt-6 md:col-span-3 md:px-2">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Price
                        </label>
                        <div className="mt-2">
                            <input
                                id="price"
                                name="price"
                                type="number"
                                min={0}
                                onChange={handleInputChange}
                                value={event.price}
                                autoComplete="price"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6 mt-6 md:col-span-3 md:px-2">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="date"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Date
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="date"
                                name="date"
                                type="date"
                                onChange={handleInputChange}
                                value={event.date}
                                autoComplete="current-date"
                                required
                                className="block w-full rounded-md border-0 py-1.5 bg-white text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6 mt-6 md:col-span-3  md:px-2">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Address
                        </label>
                        <div className="mt-2">
                            <input
                                id="address"
                                name="address"
                                type="text"
                                onChange={handleInputChange}
                                value={event.address}
                                autoComplete="address"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6 mt-6 md:col-span-3 md:px-2">
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            City
                        </label>
                        <div className="mt-2">
                            <input
                                id="city"
                                name="city"
                                type="text"
                                onChange={handleInputChange}
                                value={event.city}
                                autoComplete="city"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6 mt-6 md:col-span-3 md:px-2">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Country
                        </label>
                        <div className="mt-2">
                            <input
                                id="country"
                                name="country"
                                type="text"
                                onChange={handleInputChange}
                                value={event.country}
                                autoComplete="country"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6 mt-6 md:col-span-3 md:px-2">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="images"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Images
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="images"
                                name="images"
                                type="file"
                                onChange={handleInputChange}
                                value={event.images}
                                autoComplete="current-images"
                                required
                                multiple
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer py-1.5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            />
                            <p className="text-sm font-small text-white">
                                Max. 6 images
                            </p>
                        </div>
                    </div>

                    <EventHosts
                        hosts={event.hosts}
                        setHosts={handleHostsChange}
                    />

                    <div className="sm:col-span-6 mt-6 lg:flex justify-between items-center">
                        <button
                            type="submit"
                            className="lg:me-4 flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            disabled={isUploading ? "true" : ""}
                        >
                            Create
                        </button>
                        <Link
                            to={"/concerts"}
                            className="lg:ms-4 flex w-full my-6 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
};
export default CreateEventForm;
