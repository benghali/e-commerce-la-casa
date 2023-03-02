import React from "react";
import { cards, vapings } from "../../data";
import {
  CatCard,
  Featured,
  Slide,
  TrustedBy,
  check,
  vaping,
} from "./imports";
import './home.scss'
const Home = () => {
  return (
    <div className="home" >
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container" >
          <div className="item">
            <h1>Les Bienfaits du Vape :</h1>
            {vapings.map((vape) => (
              <span>
               <div className="title">
                <img src={check} />
                <span><b>{vape.title}</b></span>
              </div>
              <p>{vape.desc}</p> 
              </span>
              
            ))}
          </div>
          <div className="item">
            <video src={vaping} controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
