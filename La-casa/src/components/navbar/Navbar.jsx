import React, { useState } from 'react'
import {Link,useLocation } from "react-router-dom"
import './navbar.scss'
const Navbar = () => {
    const[open,setOpen]=useState(false)
const curentUser ={
    id:1,
    username:"John Doe",
    isSeller:true
}



  return (
    <div className= 'navbar'>
        <div className="container">
            <div className="logo">
                <Link to="/home" className='link'>
                <span>La Casa</span>
                </Link>
                </div>
                <div className="links">
                    <span>Home</span>
                    <span>About Us</span>
                    <span>DIY</span>
                    <span>Vape</span>
                    {!curentUser?.isSeller && <span>Become a Seller</span>}
                     <span>Sign in</span>
                    { !curentUser && <button>Join</button>}
                    {curentUser && (
                        
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="https://picsum.photos/193" alt="" />
                            <span>{curentUser?.username}</span>
                            {open && <div className="options">
                                {
                                    curentUser?.isSeller &&(
                                        <>
                                        <Link className='link' to="/MyGigs">Gigs</Link >
                                        <Link className='link' to="/add">Add New Gig</Link >
                                        </>
                                    )
                                }
                                <Link className='link' to="/orders">Orders</Link >
                                <Link className='link' to="/messages">Messages</Link >
                                <Link className='link' to="/logout">Logout</Link >
                            </div>}
                        </div>
                    )}
                </div>
        </div>
    </div>
  )
}

export default Navbar