import { useState } from "react";

export default function Footer() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <div className="w-full h-28 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 flex">
                <div className="w-1/4 h-full border-2">
                    {/* Puedes agregar contenido aquí */}
                </div>
                <div className="w-2/4 h-full border-2">
                    {/* Puedes agregar contenido aquí */}
                </div>
                <div className="w-1/4 h-full flex justify-end relative border-2">
                    {/* Contenedor del menú */}
                    <div className={`absolute  bottom-28 right-0 bg-white shadow-lg rounded-lg transition-all duration-300 ${opened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} w-64 p-4`}>
                        <h1 className="text-xl font-bold mb-2 text-gray-700">Contact Us</h1>
                        <p className="text-sm text-gray-600">Phone: 555-444-222</p>
                        <p className="text-sm text-gray-600">Email: cities@outlook.eu</p>
                        <p className="text-sm text-gray-600">NIT: 7777777</p>
                    </div>

                    {/* Botón del menú */}
                    <button
                        className="bg-slate-200 w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:bg-slate-500 active:bg-slate-600 transition-colors duration-300"
                        onClick={() => setOpened(!opened)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
