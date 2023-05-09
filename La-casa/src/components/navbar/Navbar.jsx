import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import noAvatar from "../../img/noavatar.jpg";
import newRequest from "../../utils/newRequest";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const curentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/home" className="link">
            <span>La Casa</span>
          </Link>
        </div>
        <div className="links">
          <span>Accueil</span>
          <span>A propos de Nous</span>
          <span>DIY</span>
          <span>Vape</span>
          {!curentUser?.isSeller && <span>Become a Seller</span>}
          {curentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={curentUser.img || noAvatar} alt="" />
              <span>{curentUser?.username}</span>
              {open && (
                <div className="options">
                  {curentUser?.isSeller && (
                    <>
                      <Link className="link" to="/MyGigs">
                        Mes Produits
                      </Link>
                      <Link className="link" to="/add">
                        Ajouter Nouveau Produit
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Mes Commandes
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout()}>
                    Se déconnecter
                  </Link>
                </div>
              )}
            </div>
          ):(
          <>
          <Link to='/register' className="link"><span>Créer Un Compte </span></Link>
          <Link to='/login' className="link"><button>Se Connecter</button></Link>
          </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
