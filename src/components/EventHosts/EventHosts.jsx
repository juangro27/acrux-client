import { useState } from "react";

const EventHosts = ({ hosts, setHosts }) => {
    const [newHost, setNewHost] = useState("");

    const handleInputChange = (e) => {
        setNewHost(e.target.value);
    };

    const handleAddHost = () => {
        if (newHost) {
            setHosts([...hosts, newHost]);
            setNewHost("");
        }
    };

    const handleRemoveHost = (hostToRemove) => {
        setHosts(hosts.filter((host) => host !== hostToRemove));
    };

    return (
        <div className="sm:col-span-6 mt-6">
            <label
                htmlFor="hosts"
                className="block text-sm font-medium leading-6 text-white"
            >
                Hosts
            </label>
            <div className="mt-2">
                <div className="flex items-center space-x-2">
                    <input
                        id="hosts"
                        name="hosts"
                        type="text"
                        onChange={handleInputChange}
                        value={newHost}
                        autoComplete="off"
                        className="block w-full rounded-md border-gray-300 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                    <button
                        type="button"
                        onClick={handleAddHost}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                        Add
                    </button>
                </div>
                {hosts.map((host) => (
                    <div
                        key={host}
                        className="flex items-center mt-2"
                    >
                        <span className="inline-flex items-center px-3 py-2 rounded text-sm font-medium bg-gray-100 text-gray-800">
                            {host}
                        </span>
                        <button
                            type="button"
                            onClick={() => handleRemoveHost(host)}
                            className="inline-flex items-center ml-2 px-3 py-2 border border-transparent text-xs font-medium rounded shadow-sm text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventHosts;
