import { useNavigate } from "react-router-dom";

export default function Cards({ cities }) {
    const navigate = useNavigate();

    function handleNavigate(city) {
        navigate(`/citySelected/${city._id}`, { state: { city } });
    }

    return (
        <>
        <div className="sm:block hidden">
           <div className="flex flex-wrap justify-around"
>
            {cities.map((city) => (
                <div key={city._id} className="bg-white shadow-lg rounded-lg mb-6 w-96  ">
                    <img src={city.photo} alt={city.name} className="w-full h-56 object-cover" />

                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">{city.name}</h2>
                        <p className="text-sm text-gray-600">{city.country} - {city.continent}</p>
                        <p className="mt-2 text-gray-700">{city.description}</p>
                        <button
                            className="inline-block bg-blue-500 text-white text-xs font-semibold mt-4 px-2 py-1 rounded hover:bg-blue-800 active:bg-white"
                            onClick={() => handleNavigate(city)}
                        >
                            {city.badge}
                        </button>
                    </div>
                </div>
            ))}
        </div>  
        </div>
        {/*==================================================================*/ }
        <div className="sm:hidden">
           <div className="w-full flex flex-wrap border-2 border-blue-400 justify-around">
            {cities.map((city) => (
                <div key={city._id} className="bg-white shadow-lg rounded-lg overflow-hidden w-96 mb-6 sm:w-72">
                    <img src={city.photo} alt={city.name} className="w-full h-48 object-cover" />

                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">{city.name}</h2>
                        <p className="text-sm text-gray-600">{city.country} - {city.continent}</p>
                        <p className="mt-2 text-gray-700">{city.description}</p>
                        <button
                            className="inline-block bg-blue-500 text-white text-xs font-semibold mt-4 px-2 py-1 rounded hover:bg-blue-800 active:bg-white"
                            onClick={() => handleNavigate(city)}
                        >
                            {city.badge}
                        </button>
                    </div>
                </div>
            ))}
        </div>  
        </div>

        </>
        
    );
}
