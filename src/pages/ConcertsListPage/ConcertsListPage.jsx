import ConcertsList from "../../components/ConcertsList/ConcertsList";

const ConcertsListPage = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center	font-bold text-white py-10">
                Our concerts
            </h1>
            <ConcertsList />
        </div>
    );
};

export default ConcertsListPage;
