import { useState, useEffect } from "react";

export default function Carousel() {
    const cities = [
        {
            "image": 'image_1.jpg',
            "city": 'Tokyo',
            "country": 'Japan',
            "department": 'Kanto'
        },
        {
            "image": 'image_2.jpg',
            "city": 'Paris',
            "country": 'France',
            "department": 'Île-de-France'
        },
        {
            "image": 'image_3.jpg',
            "city": 'New York',
            "country": 'USA',
            "department": 'New York'
        },
        {
            "image": 'image_4.jpg',
            "city": 'Sydney',
            "country": 'Australia',
            "department": 'New South Wales'
        },
        {
            "image": 'image_5.jpg',
            "city": 'Berlin',
            "country": 'Germany',
            "department": 'Berlin'
        },
        {
            "image": 'image_6.jpg',
            "city": 'Rio de Janeiro',
            "country": 'Brazil',
            "department": 'Rio de Janeiro'
        },
        {
            "image": 'image_7.jpg',
            "city": 'Cairo',
            "country": 'Egypt',
            "department": 'Cairo Governorate'
        },
        {
            "image": 'image_8.jpg',
            "city": 'Moscow',
            "country": 'Russia',
            "department": 'Moscow'
        },
        {
            "image": 'image_9.jpg',
            "city": 'Toronto',
            "country": 'Canada',
            "department": 'Ontario'
        },
        {
            "image": 'image_10.jpg',
            "city": 'Mexico City',
            "country": 'Mexico',
            "department": 'Mexico City'
        },
        {
            "image": 'image_11.jpg',
            "city": 'Mumbai',
            "country": 'India',
            "department": 'Maharashtra'
        },
        {
            "image": 'image_12.jpg',
            "city": 'Cape Town',
            "country": 'South Africa',
            "department": 'Western Cape'
        }
    ];

    const slides = cities.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 4);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectNewSlide = (next = true) => {
        const nextIndex = next
            ? (selectedIndex + 1) % slides.length
            : (selectedIndex - 1 + slides.length) % slides.length;
        setSelectedIndex(nextIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewSlide(true);
        }, 6000);

        return () => clearInterval(interval);
    }, [selectedIndex]);

    const previous = () => selectNewSlide(false);
    const next = () => selectNewSlide(true);

    return (
        <div className="flex justify-center items-center w-full h-full mb-24">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-full px-10 overflow-hidden">
                    <div className="sm:block hidden">
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
                            {slides[selectedIndex].map((item, idx) => (
                                <div className="rounded-2xl my-3" key={idx}>
                                    <div className="w-full sm:h-auto md:h-40 lg:h-52">
                                        <img
                                            src={`/images/${item.image}`}
                                            alt={`Slide image ${idx + 1}`}
                                            className="max-w-full w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out"
                                        />
                                    </div>

                                    <div className="h-44 bg-slate-100 rounded md:h-48">
                                        <div className="h-24 shadow-inner">
                                            <p className="text-start text-gray-700 text-xl ml-6">{item.country}</p>
                                            <p className="ml-6">A good option... <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                            </svg>
                                            </p>
                                        </div>
                                        <div className="bg-slate-200 w-full h-8 shadow-lg">
                                            <p className="text-lg font-peps ml-6">{item.city}</p>
                                        </div>
                                        <div className="bg-slate-50 w-full h-8 shadow-inner">
                                            <p className="text-lg font-peps ml-6">{item.department}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:hidden ">
                        <div className=" grid grid-cols-1">
                            {slides[selectedIndex].map((item, idx) => (
                                <div className="rounded-2xl my-3" key={idx}>
                                    <div className="w-full sm:h-auto md:h-40 lg:h-52">
                                        <img
                                            src={`/images/${item.image}`}
                                            alt={`Slide image ${idx + 1}`}
                                            className="max-w-full w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out"
                                        />
                                    </div>

                                    <div className="h-44 bg-slate-100 rounded md:h-48">
                                        <div className="h-24 shadow-inner">
                                            <p className="text-start text-gray-700 text-xl ml-6">{item.country}</p>
                                            <p className="ml-6">A good option... <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                            </svg>
                                            </p>
                                        </div>
                                        <div className="bg-slate-200 w-full h-8 shadow-lg">
                                            <p className="text-lg font-peps ml-6">{item.city}</p>
                                        </div>
                                        <div className="bg-slate-50 w-full h-8 shadow-inner">
                                            <p className="text-lg font-peps ml-6">{item.department}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="flex justify-around w-full max-w-6xl mt-4">
                    <button
                        onClick={previous}
                        className="text-2xl text-gray-700 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={next}
                        className="text-2xl text-gray-700 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
}
