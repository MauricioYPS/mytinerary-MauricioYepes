import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../store/reducers/cityReducer";
import { useEffect } from "react";
import React from "react";
export default function CityDetails() {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(-1);
    }

    const citySelected = useParams().id;
    const dispatch = useDispatch();

    const {city, itineraries} = useSelector((state) =>{
        const city = state.cities.cities.find((city) => city._id === citySelected);
        const itineraries = city?.itinerary ? [city.itinerary] : []; // Asegúrate de devolver un array
        return {city, itineraries};
    }
        
    );
    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);

    if (!city) {
        return <p>City not found</p>;
    }

    return (
        <>
            <div className="sm:block hidden">
                <div className="w-full h-40"></div>
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800">{city.name}</h1>
                    </div>

                    {/* City Image and Details */}
                    <div className="flex flex-wrap justify-center mb-8">
                        <div className="w-full lg:w-3/4 border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
                            <img className="w-full h-64 object-cover" src={city.photo} alt={city.name} />
                        </div>
                        <div className="w-full lg:w-3/4 mt-6 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md">
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
                                                <h3 className="text-lg font-semibold">{itinerary.namePerson}</h3>
                                                <p className="text-gray-600">{itinerary.nameActivity}</p>
                                            </div>
                                        </div>
                                        <img src={itinerary.photoActivity} alt={itinerary.nameActivity} className="w-full h-48 object-cover rounded-lg mb-4" />
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Price: ${itinerary.price}</span>
                                            <span className="text-gray-600">Duration: {itinerary.duration} Hs</span>
                                            <span className="text-gray-600">Likes: {itinerary.likes}</span>
                                        </div>
                                        <div className="flex flex-wrap">
                                            {itinerary.hashtags.map((hashtag, index) => (
                                                <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">
                                                    {hashtag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="border-2 border-red-600 w-full h-auto flex justify-center">
                                        <p className="text-gray-700 mt-4 italic">{itinerary.comments}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Friendly message when no itineraries are available
                            <p className="text-gray-500 italic text-center">Don't have any itineraries yet</p>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}
