import React from 'react';
import './featured.scss';
import smoke from '../../img/smoke.mp4';
import search from "../../img/search.png";

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className="left">
          <h1>Find the perfect <i>place</i> to stop smoking </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" />
              <input type="text"  />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>popular</span>
            <button>Vaporesso</button>
            <button>Fruité</button>
            <button>Gourmand</button>
            <button>Atout</button>


          </div>
        </div>
        <div className="right">
        <video  className="smoke" src={smoke} loop autoPlay muted/>
        </div>
      </div>
    </div>
  );
};

export default Featured;
