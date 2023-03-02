import React from "react";
import "./trustedBy.scss";
import { lostVape,smoke,geekVape,vaporesso,voopoo} from './imports'

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
    </div>
  );
};

export default TrustedBy;
