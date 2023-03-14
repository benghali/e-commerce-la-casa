import React, { useState } from "react";
import "./gigs.scss";
import down from "../../img/down.png";
import {gigs} from "../../data"
import GigCard from "../../components/gigCard/GigCard";


const Gigs = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">La Casa &gt Produits &gt </span>
        <h1>VAPORESSO</h1>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Appliquer</button>
          </div>
          <div className="right">
            <span className="sortBy">Trier par :</span>
            <span className="sortType">
              {sort === "sales" ? "Best-seller" : "Nouveau"}
            </span>
            <img
              src={down}
              alt=""
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span
                    onClick={() => {
                      reSort("createdAt");
                    }}
                  >
                    Nouveau
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      reSort("sales");
                    }}
                  >
                    Best-seller
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
