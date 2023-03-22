import React, { useState } from "react";
import upload from "../../utils/upload";
import "./register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Créer un nouveau compte</h1>
          <label htmlFor="">Nom d'utilisateur</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Mot de passe</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Ajouter une Photo </label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Pays</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button type="submit">Enregister</button>
        </div>
        <div className="right">
          <h1>Je veux devenir vendeur</h1>
          <div className="toggle">
            <label htmlFor="">Activer le compte vendeur</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Numéro du Télephone</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          
        </div>
      </form>
    </div>
  );
}

export default Register;