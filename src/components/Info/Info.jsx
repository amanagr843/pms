import React from "react";
import btc from '../../assets/img/btc.svg'
import eth from '../../assets/img/eth.svg';
import sol from '../../assets/img/sol.svg';
import usdt from '../../assets/img/usdt.svg';
const Info = ({handlechange}) => {
  const [increase,setincrease] = React.useState("150%")
  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">Ant Steps(CT01)</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">BTC | USDT | ETH | SOL </h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
        In this package your money will increase slowly but collectively just like ant as your provided fiat will be invested in most reliable and trusted cryptocurrency such as:<br/>
        Bitcoin (BTC)  <br/>
        Ethereum (ETH)<br/>
        Solana (SOL) <br/>
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
        handlechange()
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
