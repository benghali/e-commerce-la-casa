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
                    <span>Accueil</span>
                    <span>A propos de Nous</span>
                    <span>DIY</span>
                    <span>Vape</span>
                    {!curentUser?.isSeller && <span>Become a Seller</span>}
                     <span>Sign in</span>
                    { !curentUser && <button>Se connecter</button>}
                    {curentUser && (
                        
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="https://picsum.photos/193" alt="" />
                            <span>{curentUser?.username}</span>
                            {open && <div className="options">
                                {
                                    curentUser?.isSeller &&(
                                        <>
                                        <Link className='link' to="/MyGigs">Mes Produits</Link >
                                        <Link className='link' to="/add">Ajouter Nouveau Produit</Link >
                                        </>
                                    )
                                }
                                <Link className='link' to="/orders">Mes Commandes</Link >
                                <Link className='link' to="/messages">Messages</Link >
                                <Link className='link' to="/logout">Se déconnecter</Link >
                            </div>}
                        </div>
                    )}
                </div>
        </div>
    </div>
  )
}

export default Navbar