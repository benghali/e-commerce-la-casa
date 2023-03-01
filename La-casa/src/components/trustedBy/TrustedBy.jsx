import React from "react";
import "./trustedBy.scss";
import lostVape from "../../img/lostvape-logo.png";
import smoke from "../../img/smok.png";
import geekVape from "../../img/geek-vape.png";
import vaporesso from "../../img/vaporesso_logo.png";
import voopoo from "../../img/voopoo.png";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
<div className="container">
          <span>Trusted by:</span>
           <img src={lostVape} alt="" />
          <img src={smoke} alt="" />
          <img src={vaporesso} alt="" />
          <img src={voopoo} alt="" />
          <img src={geekVape} alt="" />
          </div>
         x

          
    </div>
  );
};

export default TrustedBy;
