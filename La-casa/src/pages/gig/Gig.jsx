import React from "react";
import "./gig.scss";
import Slider from "infinite-react-carousel/lib/carousel/slider";
import {star,like,dislike,vaporesso,clock,recycle,greenCheck} from './import'
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs"> La Casa &gt Produits &gt </span>
          <h1>description du produit </h1>
          <div className="produit">
            <img className="pp" src={vaporesso} alt="" />
            <span>nom du produit</span>
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://www.lepetitvapoteur.com/37823-large_default/kit-gen-200-vaporesso.jpg"
              alt=""
            />
            <img
              src="https://www.lepetitvapoteur.com/37824-large_default/kit-gen-200-vaporesso.jpg"
              alt=""
            />
            <img
              src="https://www.lepetitvapoteur.com/37825-large_default/kit-gen-200-vaporesso.jpg"
              alt=""
            />
          </Slider>
          <h2>A propos de ce Produit </h2>
          <p>
            Le kit Gen 200 est une cigarette électronique fonctionnant avec deux
            accus 18650 et qui reste d'une étonnante légèreté. Fabriqué avec des
            matériaux modernes et robustes, le kit Gen 200 assure une puissance
            de 220 watts maximum et des modes et fonctions innovants. La Gen 200
            s'accompagne du fameux clearomiseur subohm iTank 8 ml. Un atomiseur
            aérien, ayant un réservoir bombé et généreux, il délivre avec les
            résistances GTi des saveurs au sommet et une vapeur abondante. Le
            kit Gen 200 ravira autant les amateurs de saveurs boostées que de
            vapeur dense.
          </p>
          <div className="reviews">
            <h2>Commentaires</h2>
            <div className="item">
              <div className="user">
                <img className="pp" src="https://picsum.photos/200/300?random=1" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img 
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                Avec le kit Gen 200, Vaporesso réussi le pari de créer un mod
                électronique à double accu dont le revêtement est à l'épreuve de
                l'usure, confortable et surtout, très léger. Il associe à cette
                box, l'excellent clearomiseur iTank 8 ml. Étudié pour éviter les
                fuites avec un réservoir de 8 ml et une aération
                particulièrement ouverte. L'idéal pour le cloud, la vapeur, les
                nuages.
              </p>
              <div className="helpful">
                <span>Utile</span>
                <img src={like} alt="" />
                <span>Oui</span>
                <img src={dislike} alt="" />
                <span>Non</span>
              </div>
            </div>
            <hr/>
            <div className="item">
              <div className="user">
                <img  className="pp" src="https://picsum.photos/200/300?random=1" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                Avec le kit Gen 200, Vaporesso réussi le pari de créer un mod
                électronique à double accu dont le revêtement est à l'épreuve de
                l'usure, confortable et surtout, très léger. Il associe à cette
                box, l'excellent clearomiseur iTank 8 ml. Étudié pour éviter les
                fuites avec un réservoir de 8 ml et une aération
                particulièrement ouverte. L'idéal pour le cloud, la vapeur, les
                nuages.
              </p>
              <div className="helpful">
                <span>Utile</span>
                <img src={like} alt="" />
                <span>Oui</span>
                <img src={dislike} alt="" />
                <span>Non</span>
              </div>
            </div>
            <hr/>
            <div className="item">
              <div className="user">
                <img  className="pp" src="https://picsum.photos/200/300?random=1" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                Avec le kit Gen 200, Vaporesso réussi le pari de créer un mod
                électronique à double accu dont le revêtement est à l'épreuve de
                l'usure, confortable et surtout, très léger. Il associe à cette
                box, l'excellent clearomiseur iTank 8 ml. Étudié pour éviter les
                fuites avec un réservoir de 8 ml et une aération
                particulièrement ouverte. L'idéal pour le cloud, la vapeur, les
                nuages.
              </p>
              <div className="helpful">
                <span>Utile</span>
                <img src={like} alt="" />
                <span>Oui</span>
                <img src={dislike} alt="" />
                <span>Non</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>KIT Gen 200</h3>
            <h2>$50.99</h2>
          </div>
          <p>les prix dans leur gamme des vapes</p>
          <div className="details">
            <div className="item">
                <img src={clock} alt="" />
                <span> 2 jours de livraison</span>
            </div>
            <div className="item">
                <img src={recycle} alt="" />
                <span> 3 révisions</span>
            </div>
          </div>
          <div className="features">
            <div className="items">
              <img src={greenCheck} alt="" />
              <span>Edition limitée</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
