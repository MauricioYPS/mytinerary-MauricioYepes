import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../store/reducers/cityReducer";
import { useEffect } from "react";
export default function Input() {
    const handleChange = (event) => {
        onFilter(event.target.value);
    };
    const navigate =useNavigate()

    function handleNavigate(){
        navigate('/home')
    }

    const dispatch = useDispatch();
    const {search} = useSelector(state => state.cities)
    

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        dispatch({ type: 'cities/changeSearch', payload: searchTerm });
        dispatch(fetchCities(searchTerm));
        
    };

    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);

    return (
        <>
            <div className="w-full h-40"></div>
            <div className="sm:block hidden">
                <div className="w-full h-16 flex items-center justify-between mt-10 mb-10">
                    <div className="w-24 h-full ml-16 ">
                    <button className=" bg-blue-500 text-white text-sm font-semibold w-full h-full rounded hg" onClick={() => handleNavigate()}>
                        Home
                    </button>
                    </div>
                    <div className="w-1/3 h-full mr-10">
                        <input
                            type="text"
                            className="bg-slate-500 w-full h-full rounded-lg"
                            placeholder="  Search cities.."
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>
            {/*============================== */}
            <div className="sm:hidden">
                <div className="w-full h-16 flex justify-between mt-10 mb-10">
                <div className="w-24 h-full ml-8">
                    <button className=" bg-blue-500 text-white text-sm font-semibold w-full h-full rounded hg" onClick={() => handleNavigate()}>
                        Home
                    </button>
                    </div>
                    <div className="w-5/5 h-full mr-3">
                        <input
                            type="text"
                            className="bg-slate-500 w-full h-full rounded-lg"
                            placeholder="  Search cities.."
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>

        </>

    );
}
