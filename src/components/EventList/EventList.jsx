import { Link, useLocation } from "react-router-dom";
import eventsService from "../../services/events.service";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import Accordion from "../Accordion/Accordion";
import SearchForm from "../SearchForm/SearchForm";
import EventCard from "../EventCard/EventCard";

const EventList = () => {
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
            <div className="mx-auto max-w-2xl px-4 pb-10 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-2">
                <Accordion
                    title="Search concert"
                    content={<SearchForm setEvents={setEvents} />}
                />

                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        {events.length === 0 ? (
                            <p className="text-white text-2xl text-center">
                                No results...
                            </p>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {events.map((event) => (
                                        <Link
                                            key={event._id}
                                            to={event._id}
                                            className="group bg-white rounded-xl"
                                        >
                                            <EventCard event={event} />
                                        </Link>
                                    ))}
                                </div>
                                <Pagination
                                    pagination={pagination}
                                    changePage={changePage}
                                />
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default EventList;
