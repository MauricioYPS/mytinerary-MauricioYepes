import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../store/reducers/cityReducer";
import { useEffect, useState } from "react";
import React from "react";

export default function Itinerary() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [liked, setLiked] = useState(false); // Estado para gestionar el like
    const citySelected = useParams().id;
    const dispatch = useDispatch();

    const { city, itineraries } = useSelector((state) => {
        const city = state.cities.cities.find((city) => city._id === citySelected);
        const itineraries = city?.itinerary ? [city.itinerary] : [];
        return { city, itineraries };
    });
    function handleNavigate(){
        navigate('/cities')
    }

    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);

    if (!city) {
        return <p>City not found</p>;
    }

    return (
        <>
            <div className="sm:block hidden border-gray-200">
                <div className="w-full h-40"></div>
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="text-center mb-8 flex justify-center  flex-col-reverse">
                        <h1 className="text-4xl font-bold text-gray-800">{city.name}</h1>
                    <button className=" bg-blue-500 text-white text-sm font-semibold w-32 h-16 ml-16 rounded hg" onClick={() => handleNavigate()}>
                        Cities
                    </button>
                    </div>

                    {/* City Image and Details */}
                    <div className="flex flex-wrap justify-center mb-8 ">
                        <div className="w-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-md h-4/5">
                            <img className="w-full h-full object-cover" src={city.photo} alt={city.name} />
                        </div>
                        <div className="w-full mt-4 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md ">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-md">{city.badge}</span>
                                <span className="text-gray-600 text-sm">{city.continent}, {city.country}</span>
                            </div>
                            <p className="text-gray-700 text-base">{city.description}</p>
                        </div>
                    </div>

                    {/* Itineraries Section */}
                    <div className="w-full lg:w-3/4 mx-auto mt-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Itineraries</h2>

                        {/* Check if itineraries exist and display them */}
                        {itineraries && itineraries.length > 0 ? (
                            <div className="space-y-6">
                                {itineraries.map((itinerary) => (
                                    <div key={itinerary._id} className="p-4 bg-white shadow-md rounded-lg border border-gray-300 h-full">
                                        <div className="flex items-center mb-4">
                                            <img src={itinerary.photoPerson} alt={itinerary.namePerson} className="w-16 h-16 rounded-full mr-4" />
                                            <div>
                                                <p className="text-gray-600 font-semibold text-lg">{itinerary.nameActivity}</p>
                                                <h3 className="text-md">By {itinerary.namePerson}</h3>
                                            </div>
                                        </div>
                                        <img src={itinerary.photoActivity} alt={itinerary.nameActivity} className="w-full h-96 object-cover rounded-lg mb-4" />
                                        <div className="flex justify-between items-center mb-2">
                                            {/* Mostrar precio como billetes */}
                                            <div className="flex items-center">
                                                <span className="text-gray-600 mr-2">Price:</span>
                                                {[...Array(itinerary.price)].map((_, index) => (
                                                    <img key={index} src="https://cdn-icons-png.freepik.com/128/1479/1479433.png" alt="price-icon" className="w-6 h-6 mr-1" />
                                                ))}
                                            </div>
                                            <span className="text-gray-600">Duration: {itinerary.duration} Hs</span>
                                            {/* Like button con animación */}
                                            <button onClick={() => setLiked(!liked)} className="flex items-center">
                                                <img
                                                    src={liked ? "https://cdn-icons-png.freepik.com/512/15118/15118349.png" : "https://cdn-icons-png.freepik.com/512/14351/14351140.png"}
                                                    alt="like-icon"
                                                    className={`w-6 h-6 ${liked ? "w-6 h-6" : ""}`}
                                                />
                                                <span className="text-gray-600 ml-1">{liked ? itinerary.likes + 1 : itinerary.likes}</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap">
                                            {itinerary.hashtags.map((hashtag, index) => (
                                                <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">
                                                    {hashtag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="rounded-lg px-2 py- flex justify-center items-center border-2 mt-4 flex-col">
                                        <div className="bg-slate-300 my-3 rounded-md flex flex-col p-2">
                                                <p>View More</p>
                                                    </div>
                                            <button
                                                className="hover:bg-slate-300 active:bg-slate-400 w-10 flex justify-center rounded-md bg-slate-200 p-1"
                                                onClick={() => setOpen(!open)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic text-center">No itineraries yet for this city</p>
                        )}
                        {/* Div desplegable con mensaje de construcción */}
                        <div className={`${open ? "max-h-96" : "max-h-0"} flex flex-wrap justify-center transition-all duration-300 overflow-hidden bg-gray-800 rounded-lg`}>
                            {open && (
                                <div className="w-full flex flex-col items-center text-white text-center space-y-4 p-4">
                                    <p className="text-lg italic">This section is under construction!</p>
                                    <img className="w-12 h-12 object-cover" src="https://cdn-icons-png.freepik.com/512/8176/8176754.png" alt="icon" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* =============================================================================== */}
            <div className="sm:hidden">
                <div className="w-full h-40"></div>
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="text-center mb-8 flex justify-center  flex-col-reverse">
                        <h1 className="text-4xl font-bold text-gray-800">{city.name}</h1>
                    <button className=" bg-blue-500 text-white text-sm font-semibold w-32 h-12 ml-12 rounded hg" onClick={() => handleNavigate()}>
                        Cities
                    </button>
                    </div>

                    {/* City Image and Details */}
                    <div className="flex flex-wrap justify-center mb-8 ">
                        <div className="w-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-md h-4/5">
                            <img className="w-full h-full object-cover" src={city.photo} alt={city.name} />
                        </div>
                        <div className="w-full mt-4 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md ">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-md">{city.badge}</span>
                                <span className="text-gray-600 text-sm">{city.continent}, {city.country}</span>
                            </div>
                            <p className="text-gray-700 text-base">{city.description}</p>
                        </div>
                    </div>

                    {/* Itineraries Section */}
                    <div className="w-full lg:w-3/4 mx-auto mt-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Itineraries</h2>

                        {/* Check if itineraries exist and display them */}
                        {itineraries && itineraries.length > 0 ? (
                            <div className="space-y-6">
                                {itineraries.map((itinerary) => (
                                    <div key={itinerary._id} className="p-4 bg-white shadow-md rounded-lg border border-gray-300">
                                        <div className="flex items-center mb-4">
                                            <img src={itinerary.photoPerson} alt={itinerary.namePerson} className="w-12 h-12 rounded-full mr-4" />
                                            <div>
                                                <p className="text-gray-600 font-semibold text-md">{itinerary.nameActivity}</p>
                                                <h3 className="text-md">By {itinerary.namePerson}</h3>
                                            </div>
                                        </div>
                                        <img src={itinerary.photoActivity} alt={itinerary.nameActivity} className="w-full h-48 object-cover rounded-lg mb-4" />
                                        <div className=" mb-2  inline-block">
                                            {/* Mostrar precio como billetes */}
                                            <div className="flex items-center p-1">
                                                <span className="text-gray-600 mr-2">Price:</span>
                                                
                                                {[...Array(itinerary.price)].map((_, index) => (
                                                    <img key={index} src="https://cdn-icons-png.freepik.com/128/1479/1479433.png" alt="price-icon" className="w-6 h-6 mr-1" />
                                                ))}
                                            </div>
                                            <span className="text-gray-600 p-1">Duration: {itinerary.duration} Hs</span>
                                            {/* Like button con animación */}
                                            <button onClick={() => setLiked(!liked)} className="flex items-center">
                                                <img
                                                    src={liked ? "https://cdn-icons-png.freepik.com/512/15118/15118349.png" : "https://cdn-icons-png.freepik.com/512/14351/14351140.png"}
                                                    alt="like-icon"
                                                    className={`w-6 h-6 ${liked ? "w-6 h-6" : ""}`}
                                                />
                                                <span className="text-gray-600 ml-1 p-2">{liked ? itinerary.likes + 1 : itinerary.likes}</span>
                                            </button>
                                        </div>



                                        <div className="flex flex-wrap">
                                            {itinerary.hashtags.map((hashtag, index) => (
                                                <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">
                                                    {hashtag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="rounded-lg px-2 py-1 flex justify-center items-center border-2 mt-4 flex-col">
                                                <div className="bg-slate-300 my-3 rounded-md">
                                                <p>View More</p>
                                                    </div>
                                            <button
                                                className="hover:bg-slate-300 active:bg-slate-400 w-10 flex justify-center rounded-md bg-slate-200 p-1"
                                                onClick={() => setOpen(!open)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic text-center">No itineraries yet for this city</p>
                        )}
                        {/* Div desplegable con mensaje de construcción */}
                        <div className={`${open ? "max-h-96" : "max-h-0"} flex flex-wrap justify-center transition-all duration-300 overflow-hidden bg-gray-800 rounded-lg`}>
                            {open && (
                                <div className="w-full flex flex-col items-center text-white text-center space-y-4 p-4">
                                    <p className="text-lg italic">This section is under construction!</p>
                                    <img className="w-12 h-12 object-cover" src="https://cdn-icons-png.freepik.com/512/8176/8176754.png" alt="icon" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
