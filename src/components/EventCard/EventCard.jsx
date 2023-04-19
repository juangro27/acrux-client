import { parseDate } from "../../utils/parseDate";

const EventCard = ({ event }) => {
    return (
        <>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={event.images[0]}
                    alt={event.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <div>
                <p className="ps-5 mt-2">
                    <strong className="text-gray-900 ">Date:</strong>{" "}
                    {parseDate(event.date)}
                </p>

                <h3 className="mt-4 text-sm text-center text-gray-700">
                    {event.name}
                </h3>

                <div className="flex justify-between items-center">
                    <p className="mt-1  ml-5 text-lg font-medium text-gray-900">
                        {event.price === 0 ? "FREE" : `${event.price} €`}
                    </p>
                    <p className="px-5 m-5 mt-4 py-2 rounded-md text-teal-100 bg-teal-600 hover:bg-teal-700">
                        Details
                    </p>
                </div>
            </div>
        </>
    );
};
export default EventCard;
