import { useNavigate } from "react-router-dom";
export default function Input({ onFilter }) {
    const handleChange = (event) => {
        onFilter(event.target.value);
    };
    const navigate =useNavigate()

    function handleNavigate(){
        navigate('/home')
    }


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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

        </>

    );
}
