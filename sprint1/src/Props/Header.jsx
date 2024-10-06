import SideBar from "./sidebar"
function Header(){return(<>
<div id="padre" className="w-full h-28 bg-zinc-700 flex justify-between items-center fixed">
    <SideBar></SideBar> 

<div className="h-16  flex mr-3">
    <img className="rounded-full" src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="" />
</div>

</div>







</>)}
export default Header