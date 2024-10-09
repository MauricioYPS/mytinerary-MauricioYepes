import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cities() {
    const navigate = useNavigate();

    function navigateBack() {
        navigate(-1)
    }
    return (<>

        <div className="w-full h-screen flex items-center justify-center flex-col">

            <h1 className=" text-6xl font-bold mb-4 sm:block hidden">
                Coming soon...
            </h1>
            <h1 className=" text-6xl font-bold mb-4 sm:hidden text-center">
                Coming soon...
            </h1>
            <button className="bg-slate-400 p-2 w-40 h-20 hover:bg-slate-500 rounded-lg shadow-lg text-2xl active:w-44 active:h-24 transition-all" onClick={() => navigateBack()}>Home</button>
        </div>



    </>)
}