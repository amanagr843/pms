import React, { Fragment } from "react";

import blue from "../assets/img/btc.png";
import black from "../assets/img/eth.png";
import green from "../assets/img/green.png";
import red from "../assets/img/usdt.png";
import orange from "../assets/img/orange.png";

const ProductImages = () => {
  return (
    <Fragment>

     <div className="blue shoe" color="blue" style={{width:"80%",marginTop:"-10rem",top:"233px"}}>
     <p style={{color:'white'}}>
       khsdkfhdfd
       dkjfhdsf
       df<br/>
       fdjkfjdkfd<br/>
       dkfhdhfjkdhfudj
     </p>
     </div>
      <img src={red} style={{width:"80%",marginTop:"-10rem",top:"233px"}} alt="red shoe" className="shoe" color="red" />
      <img src={green} style={{width:"80%",marginTop:"-10rem",top:"233px"}} alt="red shoe" className="shoe" color="green" />

      <img src={black} style={{width:"90%",marginTop:"-10rem",top:"233px"}} alt="black shoe" className="shoe " color="black" />
    </Fragment>
  );
};

export default ProductImages;
