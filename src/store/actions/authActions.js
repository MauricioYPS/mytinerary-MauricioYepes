import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUser = createAction("setUser",(datos)=>{
    return{
        payload:datos
    }
});
const login = createAsyncThunk("login",async({email,password})=>{
    console.log("entrado al login");
    
const credentials = {
    email:email,
    password: password
}
console.log(credentials);

const response = await axios.post("http://localhost:8080/api/auth/signIn",credentials)
console.log("se procede a la solicitud");
console.log("response",response.data)
localStorage.setItem("token",response.data.token)

return response.data

})

export  {login,setUser}