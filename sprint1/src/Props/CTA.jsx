import { useEffect, useState } from 'react'
import '../App.css'
export default function CallToAction() {
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        setAnimation(true)
        console.log(animation);
        
    },[]);


    return (<>


        <div className="border-2 border-y-white
h-36 w-full">
        </div>


        <div className="h-CTA bg-cover bg-local mb-20 flex mt-16"
            style={{ backgroundImage: "url('https://himbatours.com/media/k2/items/cache/6b88c34cd64b83eac2709d6c8c29fd54_XL.jpg')" }}>
            <div className='w-full h-full mb-16 flex flex-col justify-center font-bold'>
                <h3 className={`h-zsz-md ml-7 text-sky-500  mt-20 transition-transform duration-1000 ease-out${animation ? "translate-x-0" : "-translate-x-full" }`}>Adventure and</h3>
                <h1 className="h-szs-lg text-white ml-5">Navigation </h1>
                <div className='flex justify-center'><button className='lg:w-52 lg:h-14 md:w-40 md:h-10 bg-slate-500 text-white px-2 rounded-lg hover:bg-slate-700 active:bg-slate-800 text-xl md:text-base sm:text-sm sm:h-10 '>More information</button>
                </div>

            </div>
            <div className='flex flex-col justify-around items-center'>
                <h1 className=' w-1/3 text-center md:text-lg lg:text-2xl bg-slate-100 p-1 rounded-md font-semibold text-stone-500 sm:text-sm '>Beautiful cities</h1>
                <img className='w-1/3 rounded-3xl hover:w-2/3 transition-all' src="https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-700/a_gtres_a00498537_042-a.jpg" alt="" />
                <img className='w-1/3 rounded-3xl  hover:w-2/3 transition-all' src="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2709972.jpg?w=1900&h=1262" alt="" />
                <img className='w-1/3 rounded-3xl  hover:w-2/3 transition-all' src="https://content.skyscnr.com/m/3dd5ddbd5da36698/original/GettyImages-452680481_doc.jpg?resize=1800px:1800px&quality=100" alt="" />


            </div>

        </div>









    </>)
}