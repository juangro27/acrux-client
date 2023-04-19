import { Link } from "react-router-dom";
import EventList from "../../components/EventList/EventList";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";

const ConcertsListPage = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center	font-bold text-white py-10">
                Our concerts
            </h1>
            {user ? (
                <Link
                    to="/concerts/create"
                    className="mb-10 px-10 py-2 rounded-md text-white bg-teal-600 hover:bg-teal-700"
                >
                    Create Event
                </Link>
            ) : (
                <p className="text-white mb-10 ">Login to create concerts</p>
            )}

            <EventList />
        </div>
    );
};

export default ConcertsListPage;
