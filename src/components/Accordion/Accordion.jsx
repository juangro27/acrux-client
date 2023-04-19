import React, { useState } from "react";

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded mb-6">
            <button
                className="w-full flex items-center justify-between text-left px-4 py-2 text-lg font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <svg
                    className={`w-6 h-6 mr-2 ${
                        isOpen ? "transform rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 8.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 bg-white text-gray-700">{content}</div>
            )}
        </div>
    );
}

export default Accordion;
