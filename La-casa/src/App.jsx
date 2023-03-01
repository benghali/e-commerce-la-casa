import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Gigs from './pages/gigs/Gigs'
import MyGigs from './pages/Mygigs/MyGigs'
import Add from './pages/add/Add'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Orders from './pages/orders/Orders'
import './app.scss'


import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {
  const Layout =()=>{
    return  (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/Gigs",
          element: <Gigs/>
        },
        {
          path:"/myGigs",
          element: <MyGigs/>
        },
        {
          path:"/home",
          element: <Home/>
        },
        {
          path:"/orders",
          element: <Orders/>
        },
        {
          path:"/add",
          element: <Add/>
        },
        {
          path:"/messages",
          element: <Messages/>
        },
        {
          path:"/message/:id",
          element: <Message/>
        },
      ]
    },
  ]);
  

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  )
}

export default App
