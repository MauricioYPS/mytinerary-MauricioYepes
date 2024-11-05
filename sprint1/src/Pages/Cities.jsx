import { useEffect, useState } from "react";
import { useFetcher, useNavigate } from "react-router-dom";
import Input from "../Props/Input.jsx";
import Cards from "../Props/Card.jsx";
import { fetchCities } from "../store/reducers/cityReducer.js";
import { useDispatch, useSelector } from "react-redux";

export default function Cities() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const {cities} = useSelector(state => state.cities)
    

    let urlB =''
    if (cities != 0) {
        urlB = 'https://www.palmmonorail.com//images/blog/travel-and-active-life-concept-adventure-and-trav-2022-02-02-03-58-30-utc.webp'
    }
    else{
        urlB = 'https://marketplace.canva.com/EAF5FxQlSGQ/1/0/1600w/canva-blue-and-white-illustrated-sky-and-airplane-desktop-wallpaper-zYA4XGHAYo0.jpg'
    }
    return (
        <div className=" h-full bg-no-repeat bg-center bg-cover "

            style={{
                backgroundImage: `url(${urlB})`,
            }}

        >
            <Input onFilter={setSearchTerm} />
            {isLoading ? (
                <div className="w-full h-screen text-center flex mt-40 justify-center">
                    <h1>Loading cities</h1>
                </div>
            ) : cities.length === 0 ? (
                <div className="w-full h-screen  object-cover bg-center"
                style={{backgroundImage:`url()`}}>
                    <h1 className="mt-32 text-3xl font-semibold text-center">Oops, no matches...</h1>
                    <div className=" w-full h-full flex justify-center ">
                        <img className="object-cover h-1/3" src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-sad-humanoid-robot-png-image_11931020.png" alt="" />

                    </div>
                </div>
            ) : (
                <Cards cities={cities} />
            )}
        </div>

    );
}