import React, { useEffect, useState } from "react";

const Carousel = ({ images }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((activeSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeSlide]);

    const handlePrevSlide = () => {
        setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1);
    };

    const handleNextSlide = () => {
        setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1);
    };

    return (
        <div className="relative h-80">
            <div className="absolute top-0 left-0 w-full h-full z-10">
                <div className="flex h-full justify-between items-center px-4 py-2">
                    <button
                        className="bg-white shadow rounded-full p-2"
                        onClick={handlePrevSlide}
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        className="bg-white shadow rounded-full p-2"
                        onClick={handleNextSlide}
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full ${
                        index === activeSlide ? "block" : "hidden"
                    }`}
                >
                    <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ height: "100%" }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
