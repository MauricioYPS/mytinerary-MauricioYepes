import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../store/reducers/cityReducer";
import { useEffect } from "react";
import React from "react";
export default function CityDetails() {
    // const location = useLocation();
    // const { city } = location.state;
    const navigate = useNavigate()

    function handleNavigate() {
        navigate(-1)
    }
    const citySelected = useParams().id
    const city = useSelector((state) =>
        state.cities.cities.find((city) => city._id == citySelected)
    );

    useEffect(() => {
        dispatch(fetchCities());
    }, []);

    const dispatch = useDispatch();
    console.log(city);
    

    if (!city) {
        return <p>City not found</p>;
    }
    return (<>
        <div className="sm:block hidden">
            {/* <div
                className="w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city.photo})` }}>
                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-lg text-center w-2/4">
                    <h2 className="text-3xl font-bold text-gray-800">{city.name}</h2>
                    <p className="mt-4 text-gray-700 text-4xl">Under construction...</p>
                    <button className="inline-block bg-blue-500 text-white text-sm font-semibold mt-6 px-4 py-2 rounded" onClick={() => handleNavigate()}>
                        Return1
                    </button>
                </div>
            </div> */}
            <div className="w-full h-40"></div>
      <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">{city.name}</h1>
            </div>

            {/* City Image and Details */}
            <div className="flex flex-wrap justify-center mb-8">
                {/* City Image */}
                <div className="w-full lg:w-3/4 border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
                    <img className="w-full h-64 object-cover" src={city.photo} alt={city.name} />
                </div>

                {/* City Details */}
                <div className="w-full lg:w-3/4 mt-6 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">{city.badge}</span>
                        <span className="text-gray-600 text-sm">{city.continent}, {city.country}</span>
                    </div>
                    <p className="text-gray-700 text-base">{city.description}</p>
                </div>
            </div>

            {/* Placeholder for Itineraries */}
            <div className="w-full lg:w-3/4 mx-auto mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Itinerarios</h2>
                <div className="space-y-6">
                    {/* Aquí irá la lógica para renderizar los itinerarios una vez que estén conectados */}
                    <p className="text-gray-500 italic text-center">No hay itinerarios disponibles aún.</p>
                </div>
            </div>
        </div>



        </div>
        <div className="sm:hidden">
            <div
                className="w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city.photo})` }}>
                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-lg text-center w-3/4">
                    <h2 className="text-3xl font-bold text-gray-800">{city.name}</h2>
                    <p className="mt-4 text-gray-700 text-3xl">Under construction...</p>
                    <button className="inline-block bg-blue-500 text-white text-sm font-semibold mt-6 px-4 py-2 rounded" onClick={() => handleNavigate()}>
                        <p className="text-xl">Return2</p>
                    </button>
                </div>
            </div>
        </div>



    </>);
}
