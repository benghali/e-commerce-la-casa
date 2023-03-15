import React from "react";
import "./add.scss";
const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Ajouter un Produit</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Nom du Produit</label>
            <input type="text" />
            <label htmlFor="">Catégorie</label>
            <select name="cats" id="cats">
              <option value="DIY">Furité</option>
              <option value="DIY">Gourmand</option>
              <option value="Vape">Vape</option>
              <option value="Accessoires">Accessoires</option>
            </select>
            <label htmlFor="">Choisir image</label>
            <input type="file" />
            <label htmlFor="">Télecharger la/les image(s) </label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="ecrire une petite description sur le produit"
            ></textarea>
            <button>Ajouter</button>
          </div>
          <div className="right">
            <label htmlFor="">Marque du Vape</label>
            <input type="text" placeholder="e.g VAPORESSO" />
            <label htmlFor="">Quantité du Produit</label>
            <input type="text" placeholder="e.g 30 ml" />
            <label htmlFor="">Quantité du Nicotine</label>
            <input type="text" placeholder="e.g 3 mg/ml" />
            <label htmlFor="">Prix</label>
            <input type="text" placeholder="e.g 100 TND " />
            <label htmlFor="">Autres</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
