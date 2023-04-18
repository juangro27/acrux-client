import { Link } from "react-router-dom";

const ErrorPage = () => {
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
                        <h1 className="font-bold text-white text-9xl">404</h1>
                        <p className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
                            <span className="text-red-500">Oops!</span> Page{" "}
                        </p>
                        <p className="mb-8 text-center text-white md:text-lg">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <Link
                            to="/"
                            className="px-5 py-2 rounded-md text-teal bg-white hover:bg-white"
                        >
                            Go home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
