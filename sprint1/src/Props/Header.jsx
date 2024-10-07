import SideBar from "./sidebar"
function Header() {
    return (<>
        <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-center w-full flex justify-between items-center fixed">
            <SideBar></SideBar>
            <div className=" h-full">
                <h1 className="text-white text-6xl font-extrabold drop-shadow-lg mb-4">
                    MyTinerary
                </h1>
                <p className="text-white text-2xl font-light italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Find your perfect trip, designed by insiders who know and love their cities!
                </p>
            </div>
            <div className="h-16  flex mr-2">
                <img className="rounded-full" src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="" />
            </div>
        </div>




    </>)
}
export default Header