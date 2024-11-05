import { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
export default function CallToAction() {
    const [animation, setAnimation] = useState(false)
    const navigate = useNavigate();
    function handleNavigate() {

        navigate("/cities");
    }


    useEffect(() => {
        setAnimation(true)
    }, []);


    return (<>


        <div className="border-2 border-y-white
h-28 w-full">
        </div>
        <div className='sm:block hidden'>
            <div className='w-full flex justify-center items-center bg-cyan-600 md:h-48 sm:h-52'>
                <h1 className="text-white shadow-2xl text-6xl font-extrabold p-3 font-sans">
                    MyTinerary
                </h1>
            </div>
        </div>
        <div className='sm:hidden'>
            <div className='w-full flex justify-center items-center bg-cyan-600 md:h-48 sm:h-52'>
                <h1 className="text-white shadow-2xl text-6xl font-extrabold my-10 font-sans">
                    MyTinerary
                </h1>
            </div>
        </div>

        <div className='sm:block hidden'>
            <div className="h-CTA bg-cover bg-local mb-10 flex"
                style={{ backgroundImage: "url('https://himbatours.com/media/k2/items/cache/6b88c34cd64b83eac2709d6c8c29fd54_XL.jpg')" }}>
                <div className='w-full h-full mb-16 flex flex-col justify-center font-bold'>
                    <h3 className=" object-cover h-zsz-md ml-7 text-white  mt-20 rounded-xl bg-[url('/public/images/image_3.jpg')] ">Adventure and</h3>

                    <h1 className="h-szs-lg text-white ml-5 ">Travelling.</h1>
                    <div className='flex justify-end'><button className='lg:w-52 lg:h-14 md:w-40 md:h-10 bg-cyan-900 text-white px-2 rounded-lg hover:bg-slate-700 active:bg-slate-800 text-xl md:text-base sm:text-sm sm:h-10 shadow-inner' onClick={() => handleNavigate()}>More information</button>
                    </div>

                </div>
                <div className='flex flex-col justify-around items-center'>
                    <h1 className=' w-1/3 text-center md:text-lg lg:text-2xl bg-slate-100 p-1 rounded-md font-semibold text-stone-500 sm:text-sm '>Beautiful cities</h1>
                    <img className='w-1/3 rounded-3xl hover:w-2/3 transition-all' src="https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-700/a_gtres_a00498537_042-a.jpg" alt="" />
                    <img className='w-1/3 rounded-3xl  hover:w-2/3 transition-all' src="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2709972.jpg?w=1900&h=1262" alt="" />
                    <img className='w-1/3 rounded-3xl  hover:w-2/3 transition-all' src="https://content.skyscnr.com/m/3dd5ddbd5da36698/original/GettyImages-452680481_doc.jpg?resize=1800px:1800px&quality=100" alt="" />


                </div>

            </div>
        </div>
        <div className='sm:hidden'>
            <div className="h-96 bg-cover bg-local mb-20 flex"
                style={{ backgroundImage: "url('https://himbatours.com/media/k2/items/cache/6b88c34cd64b83eac2709d6c8c29fd54_XL.jpg')" }}>
                <div className='w-full h-full mb-16 flex flex-col justify-center font-bold'>
                    <h3 className=" object-cover text-3xl ml-7 text-white  mt-20 rounded-xl bg-[url('/public/images/image_3.jpg')] ">Adventure &</h3>

                    <h1 className="text-5xl text-black ml-5 ">Travelling.</h1>
                    <div className='flex justify-end'><button className=' bg-cyan-900 text-white px-2 rounded-lg hover:bg-white active:bg-slate-800 text-xl shadow-inner p-2 mt-3 border-4 border-white' onClick={() => handleNavigate()}>information</button>
                    </div>

                </div>
                <div className='flex flex-col justify-around items-center'>
                    <h1 className=' w-2/3 text-center md:text-lg lg:text-2xl bg-slate-100 p-1 rounded-md font-semibold text-stone-500 sm:text-sm '>Cities</h1>
                    <img className='w-2/3 rounded-3xl  hover:w-2/3 transition-all' src="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2709972.jpg?w=1900&h=1262" alt="" />
                    <img className='w-2/3 rounded-3xl  hover:w-2/3 transition-all' src="https://content.skyscnr.com/m/3dd5ddbd5da36698/original/GettyImages-452680481_doc.jpg?resize=1800px:1800px&quality=100" alt="" />


                </div>

            </div>
        </div>


        <div className='w-full flex justify-center mb-10'>
            <p className="text-white text-2xl font-light italic max-w-2xl mx-auto leading-relaxed text-center">
                Find your perfect trip, designed by insiders who know and love their cities!
            </p>

        </div>









    </>)
}