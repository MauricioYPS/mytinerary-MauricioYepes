export default function Input({ onFilter }) {
    const handleChange = (event) => {
        onFilter(event.target.value);
    };

    return (
        <>
            <div className="w-full h-40"></div>
            <div className="w-full h-16 flex items-center justify-between mt-10 mb-10">
                <div className="w-24 h-full border-2 border-green-500 ml-36"></div>
                <div className="w-1/3 h-full">
                    <input
                        type="text"
                        className="bg-slate-500 w-full h-full rounded-lg"
                        placeholder="  Search cities.."
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>

    );
}
