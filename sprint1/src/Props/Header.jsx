import SideBar from "./sidebar"
function Header() {
    return (<>
        <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-center w-full flex justify-around items-center fixed h-40 ">
            <div className="w-1/4 flex justify-normal ml-10">
                <SideBar></SideBar>

            </div>
            <div className="w-2/4">

            </div>
            <div className="h-16  flex w-1/4 justify-center">
                <img className="rounded-full" src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="" />
            </div>
        </div>




    </>)
}
export default Header