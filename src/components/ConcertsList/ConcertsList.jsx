import { Link, useLocation } from "react-router-dom";
import eventsService from "../../services/events.service";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";

const ConcertsList = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState({
        totalPages: 0,
        pageSize: 10,
        totalElements: 9,
        pageNumber: 0,
        isFirst: true,
        isLast: true,
    });

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const city = queryParams.get("city");
    const address = queryParams.get("address");
    const date = queryParams.get("date");
    const country = queryParams.get("country");
    const hosts = queryParams.get("hosts");

    let queries = {};
    if (city) queries.city = city;
    if (address) queries.address = address;
    if (date) queries.date = date;
    if (country) queries.country = country;
    if (hosts) queries.hosts = hosts;

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        const concertsData = await eventsService.getAllEvents(queries);
        console.log(queries);
        const {
            totalPages,
            pageSize,
            totalElements,
            pageNumber,
            isFirst,
            isLast,
            events,
        } = concertsData.data;
        setEvents(events);
        setIsLoading(false);
        setPagination({
            totalPages,
            pageSize,
            totalElements,
            pageNumber,
            isFirst,
            isLast,
        });
    };

    const changePage = async (page) => {
        const { pageSize } = pagination;
        const skip = pageSize * page;
        try {
            const eventsData = await eventsService.getAllEvents({ skip });
            const {
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
                events,
            } = eventsData.data;

            setEvents(events);
            setPagination({
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className=" w-full px-4 pb-4">
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-2">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        {events.length === 0 ? (
                            <p className="text-white text-2xl text-center">
                                No results...
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {events.map((event) => (
                                    <Link
                                        key={event._id}
                                        to={event._id}
                                        className="group bg-white rounded-xl"
                                    >
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            <img
                                                src={event.images[0]}
                                                alt={event.name}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="mt-4 text-sm text-center text-gray-700">
                                                {event.name}
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <p className="mt-1  ml-5 text-lg font-medium text-gray-900">
                                                    {event.price === 0
                                                        ? "FREE"
                                                        : `${event.price} €`}
                                                </p>
                                                <p className="px-5 m-5 py-2 rounded-md text-teal-100 bg-teal-600 hover:bg-teal-700">
                                                    Details
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                )}
                <Pagination
                    pagination={pagination}
                    changePage={changePage}
                />
            </div>
        </div>
    );
};

export default ConcertsList;
