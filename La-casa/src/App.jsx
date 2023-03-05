import { useState } from 'react'
import {Navbar,Footer} from './components'
import {Home,Gigs,MyGigs,Add,Message,Messages,Orders,Gig} from './pages'
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
          path:"/home",
          element: <Home/>
        },
        {
          path:"/Gigs",
          element: <Gigs/>
        },
        {
          path:"/myGigs",
          element: <MyGigs/>
        },
        {
          path:"/orders",
          element: <Orders/>
        },
        {
          path:"/messages",
          element: <Messages/>
        },
        {
          path:"/message/:id",
          element: <Message/>
        },
        {
          path:"/add",
          element: <Add/>
        },
        {
          path:"gigs/gig/:id",
          element: <Gig/>
        },
        // {
        //   path:"/register",
        //   element: <Register/>
        // },
        // {
        //   path:"/login",
        //   element: <Login/>
        // },
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
