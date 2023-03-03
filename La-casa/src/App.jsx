import { useState } from 'react'
import {Navbar,Footer} from './components'
import {Home,Gigs,MyGigs,Add,Message,Messages,Orders} from './pages'
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
