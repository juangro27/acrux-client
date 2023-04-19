import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { useState } from "react";

const SignupForm = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await authService.signup(user);
            navigate("/login");
        } catch (err) {
            setErrors(err.response.data.errorMessages);
        }
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {errors.length >= 1 && (
                    <h1 className="bg-red-700 text-zinc-50 text-center rounded-md py-2">
                        {errors}
                    </h1>
                )}
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div>
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
                                value={user.name}
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={handleInputChange}
                                value={user.lastName}
                                autoComplete="lastName"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleInputChange}
                                value={user.email}
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleInputChange}
                                value={user.password}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Alredy member?
                    <Link
                        to={"/login"}
                        className="font-semibold leading-6
                            text-teal-600 hover:text-teal-500 ps-1"
                    >
                        Log In
                    </Link>
                </p>
            </div>
        </>
    );
};

export default SignupForm;
