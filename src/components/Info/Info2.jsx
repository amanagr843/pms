import React from "react";
import btc from '../../assets/img/btc.svg'
import eth from '../../assets/img/eth.svg';
import sol from '../../assets/img/sol.svg';
import usdt from '../../assets/img/usdt.svg';
import bnb from '../../assets/img/bnb.svg';
import ada from '../../assets/img/ada.svg';
import dot from '../../assets/img/dot.svg';
import uni from '../../assets/img/uni.svg';
import luna from '../../assets/img/luna.png'
import matic from '../../assets/img/matic.svg';
const Info = (props) => {
  const [increase,setincrease] = React.useState("150%")
  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big" style={{fontSize:"1.7rem"}}>Flying Eagle(CT03)</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">BTC | USDT | ETH | SOL | BNB | DOT | UNI | LUNA | MATIC</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
        In this package your money will increase slowly but collectively just like ant as your provided fiat will be invested in most reliable and trusted cryptocurrency such as:<br/>
        Bitcoin (BTC)  <br/>
        Ethereum (ETH)<br/>
        Cardano (ADA)<br/>
        Solana (SOL) <br/>
        Binance (BNB) <br/>
        Solana (SOL) <br/>
        Polkadot (DOT) <br/>
        Uniswap (UNI) <br/>
        Terra (LUNA) <br/>
        Polygon (MATIC) <br/>
        Tethers (USDT) <br/>

      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Cryptocurrency</h3>
      <div className="colors">
      <span className="color active"  color="blue"> <img src={btc}></img></span>
        <span className="color"  color="red"> <img src={eth}></img></span>
        <span className="color" color="green"> <img src={sol}></img></span>
        <span className="color"  color="black"> <img src={usdt}></img></span>
        <span className="color"  color="black"> <img src={bnb}></img></span>
        <span className="color"  color="black"> <img src={ada}></img></span>
        <span className="color"  color="black"> <img src={dot}></img></span>
        <span className="color"  color="black"> <img src={uni}></img></span>
        <span className="color"  color="black"> <img src={matic}></img></span>
        <span className="color"  color="black"> <img src={luna} style={{height:"32px",width:"40px"}}></img></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">Previour years ROI: &nbsp; <span className="increase" style={{color:'green'}}>{increase}</span></h3>
      <div className="sizes">
        <span className="size" onClick={()=>{
          setincrease("237%")
        }}>17-18</span>
        <span className="size" onClick={()=>{
          setincrease("141%")
        }}>18-19</span>
        <span className="size active" onClick={()=>{
          setincrease("150%")
        }}>19-20</span>
        <span className="size" onClick={()=>{
          setincrease("127%")
        }}>20-21</span>
        {/* <span className="size">11</span> */}
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy" onClick={()=>{
        props.handlechange()
      }}>
        <i className="fas fa-shopping-cart"></i>Contact Expert
      </a>
    </div>
  );

  return (
    <div className="info">
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;
