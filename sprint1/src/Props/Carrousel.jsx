import { useState } from "react";

export default function Carousel() {
    const images = [
        'image_1.jpg', 'image_2.jpg', 'image_3.jpg',
        'image_4.jpg', 'image_5.jpg', 'image_6.jpg',
        'image_7.jpg', 'image_8.jpg', 'image_9.jpg',
        'image_10.jpg', 'image_11.jpg', 'image_12.jpg'
    ];

    // Usar reduce para dividir las imágenes en grupos de 4
    const slides = images.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 4);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // Crea un nuevo grupo
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    const [selectedIndex, setSelectedIndex] = useState(0);

    // Cambiar el slide completo
    const selectNewSlide = (next = true) => {
        const nextIndex = next
            ? (selectedIndex + 1) % slides.length // Cicla al inicio cuando llega al final
            : (selectedIndex - 1 + slides.length) % slides.length; // Cicla al final si retrocede del primer slide
        setSelectedIndex(nextIndex);
    };

    const previous = () => selectNewSlide(false);
    const next = () => selectNewSlide(true);

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full">
                {/* Carrusel con slides */}
                <div className="w-full max-w-full px-10 overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {slides[selectedIndex].map((image, idx) => (
                            <img 
                                key={idx}
                                src={`/images/${image}`}
                                alt={`Slide image ${idx + 1}`}
                                className="max-w-full h-auto object-cover rounded-lg transition-transform duration-500 ease-in-out"
                            />
                        ))}
                    </div>
                </div>

                {/* Botones de control */}
                <div className="flex justify-around w-full max-w-6xl mt-4">
                    <button
                        onClick={previous}
                        className="text-2xl text-gray-700 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={next}
                        className="text-2xl text-gray-700 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
}
