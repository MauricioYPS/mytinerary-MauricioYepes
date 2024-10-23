import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 
'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carousel from './Props/Carrousel'
import Header from "./Props/Header"
import Body from './Props/Body'
import Footer from './Props/Footer'
import Home from './Pages/Home'
import Cities from './Pages/Cities'
import NotFound from './Pages/NotFound'
import City from './Pages/CityDetails'
import './App.css'
import StandardLayout from './Layouts/StandardLayout'

const router = createBrowserRouter([
  {
    element: <StandardLayout></StandardLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities> },
      {path: "/citySelected/:id", element:<City></City>}
    ],
  },
  { path: "/*", element: <NotFound></NotFound> },
])
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
