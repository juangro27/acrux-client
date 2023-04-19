import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import eventsService from "../../services/events.service";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const EventDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getEvent();
    }, []);

    const getEvent = async () => {
        try {
            const data = await eventsService.getEvent(id);
            const { data: eventData } = data;
            setEvent(eventData);
            setIsLoading(false);
        } catch (err) {
            navigate("/error");
        }
    };
    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div>
                    <Carousel images={event.images} />

                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="md:flex justify-between lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                {event.name}
                            </h1>
                            <p className="text-3xl tracking-tight text-white">
                                {event.price === 0
                                    ? "FREE"
                                    : `${event.price} €`}
                            </p>
                        </div>

                        <div className="py-10">
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-white">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 text-white">
                                <h3 className="text-xl font-medium">Address</h3>

                                <div className="mt-4">
                                    <p>
                                        <strong>Street:</strong> {event.address}
                                    </p>
                                    <p>
                                        <strong>City:</strong> {event.city}
                                    </p>
                                    <p>
                                        <strong>Country:</strong>{" "}
                                        {event.country}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 text-white">
                                <h3 className="text-xl font-medium ">Hosts:</h3>

                                <ul className="flex">
                                    {event.hosts.map((elm, index) => {
                                        return (
                                            <li
                                                key={`host-${index}`}
                                                className="mx-2"
                                            >
                                                <Link
                                                    to={`/concerts?hosts=${elm}`}
                                                    className="underline"
                                                >
                                                    {index + 1 ===
                                                    event.hosts.length
                                                        ? elm
                                                        : `${elm},`}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default EventDetails;
