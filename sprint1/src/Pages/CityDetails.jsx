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
    const  city1 = useParams().id
    const city = useSelector((state) => 
        state.cities.cities.find((city) => city._id == city1)
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
            <div
                className="w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city.photo})` }}>
                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-lg text-center w-2/4">
                    <h2 className="text-3xl font-bold text-gray-800">{city.name}</h2>
                    <p className="mt-4 text-gray-700 text-4xl">Under construction...</p>
                    <button className="inline-block bg-blue-500 text-white text-sm font-semibold mt-6 px-4 py-2 rounded" onClick={() => handleNavigate()}>
                        Return
                    </button>
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
                        <p className="text-xl">Return</p>
                    </button>
                </div>
            </div>
        </div>
    
    

    </>);
}
