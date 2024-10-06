import { useState } from "react"
export default function SideBar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="ml-3">
                {/* Botón para abrir el menú */}
                <button className="bg-white flex justify-center" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* Fondo detrás del menú */}
                <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full h-full fixed top-0 left-0 right-0 border-2 backdrop-blur-sm`} onClick={() => setOpen(false)}>
                </div>

                {/* Menú desplegable */}
                <div className={`${open ? "w-96" : "w-0"} bg-cyan-600 min-h-screen fixed top-0 left-0 transition-all duration-300 overflow-hidden`}>
                    {open && (
                        <div className="pt-3">
                            {/* Botón para cerrar el menú */}
                            <button className="ml-2 mt-2 text-white mb-14" onClick={() => setOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            {/* Links del menú */}
                            <div className="text-center bg-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2">Link1</div>
                            <div className="text-center bg-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2">Link2</div>
                            <div className="text-center bg-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2">Link3</div>
                            <div className="text-center bg-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2">Link4</div>
                            <div className="text-center bg-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2">Link5</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
