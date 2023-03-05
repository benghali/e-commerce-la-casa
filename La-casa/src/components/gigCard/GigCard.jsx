import React from "react";
import { Link } from "react-router-dom";
import "./gigCard.scss";
import heart from "../../img/heart.png"
const GigCard = ({ item }) => {
  return (
    <Link to="gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} />
        <div className="info">
          <div className="product">
            <img src={item.BrandName} alt="" />
            <span>{item.title}</span>
          </div>
          <p>{item.desc}</p>
        </div>
        <hr />
        <div className="details">
          <img src={heart} alt="" />
          <div className="price">
            <span>Startting AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
