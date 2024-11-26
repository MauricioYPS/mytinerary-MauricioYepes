import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "./sidebar"
const routes = [
    { to: "/", text: "Home", requiredAuth: false },
    { to: "/cities", text: "Cities", requiredAuth: true },
]
const routesLogin = [
    { to: "/singIn", text: "Login", routedAuth: false },
    { to: "/singUp", text: "Register", routedAuth: false },
]
function Header() {
    const user = useSelector((state) => state.authStore.user);
    const token = useSelector((state) => state.authStore.token);
    console.log(user);

    const dispatch = useDispatch();
    const navigate = useNavigate();



    return (<>
        <div className="sm:hidden bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-center w-full flex justify-around items-center fixed h-28">
            <div className="w-2/4 flex justify-around ml-10 ">
                {
                    routes.map(
                        (route, index) =>
                            (!route.requiredAuth || token) && (
                                <button key={index} className="bg-slate-400 p-2 rounded-lg" onClick={() => navigate(route.to)}>{route.text}</button>
                            ))


                }
            </div>
            <div className=" w-2/4 h-full flex items-center justify-end mx-1">
                <div className="flex justify-end">
                    {
                        routesLogin.map((route, index) =>
                            (route.routedAuth || !token) && (

                                <button key={index} className="bg-slate-400 p-2 rounded-lg  mx-2" onClick={() => navigate(route.to)}>{route.text}</button>
                            )

                        )
                    }
                    {
                        token && (
                            <button className="bg-slate-400 p-2 rounded-lg  mx-2"
                                onClick={() => dispatch({ type: "logout" })}>Logout</button>
                        )
                    }
                </div>

            </div>
            <div className="h-16  flex w-1/4 justify-center">
                <img className="rounded-full" src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="" />
            </div>
        </div>
        {/*===========================================*/}
        <div className="sm:block hidden">
            <div className=" bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-center w-full flex justify-around items-center fixed h-28 ">
                <div className="w-1/4 flex justify-normal ml-10">
                    <SideBar></SideBar>

                </div>
                <div className="w-1/4  flex h-full items-center justify-end">

                </div>
                <div className="h-16  flex w-2/4 justify-end ">
                    <div className="flex justify-around">
                        {
                            routesLogin.map((route, index) =>
                                (route.routedAuth || !token) && (

                                    <button key={index} className="bg-slate-400 p-2 rounded-lg  mx-2" onClick={() => navigate(route.to)}>{route.text}</button>
                                )

                            )
                        }
                        {
                            token && (
                                <button className="bg-slate-400 p-2 rounded-lg  mx-2"
                                    onClick={() => dispatch({ type: "logout" })}>Logout</button>
                            )
                        }
                    </div>
                    {user?.photoUrl ? (
                        <img className="rounded-full" src={user?.photoUrl} alt="photo" />
                    ):
                        <img className="rounded-full" src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="" />

                    }

                </div>
            </div>
        </div>




    </>)
}
export default Header