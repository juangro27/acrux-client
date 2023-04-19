import { Link } from "react-router-dom";

const HomePage = () => {
    const styles = {
        minHeight: "calc(100vh - 64px)",
    };
    return (
        <div
            style={styles}
            className="flex items-center justify-center w-full h-full"
        >
            <div className="px-4 lg:py-12">
                <div className="lg:gap-4 lg:flex">
                    <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <h1 className="font-bold text-center text-white text-5xl">
                            Welcome to Acrux
                        </h1>

                        <Link
                            to="/concerts"
                            className="px-5 my-10 py-2 rounded-md text-white bg-teal-600 hover:bg-teal-700"
                        >
                            Go to concerts
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
