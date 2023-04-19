import CreateEventForm from "../../components/CreateEventForm/CreateEventForm";

const CreateEventPage = () => {
    const styles = {
        minHeight: "calc(100vh - 64px)",
    };
    return (
        <div
            style={styles}
            className="h-full flex flex-col justify-center items-center"
        >
            <h1 className="text-5xl text-center	font-bold text-white py-10">
                Create concert
            </h1>
            <CreateEventForm />
        </div>
    );
};
export default CreateEventPage;
