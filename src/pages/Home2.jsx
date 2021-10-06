import React, { useEffect } from "react";

import Gradients from "../components/Gradients";
import ProductImages from "../components/ProductImages2";
import Info from "../components/Info/Info2";
import $, { event } from "jquery";
import logo from "../assets/img/logo.png";
import btc from "../assets/img/btc.jpg"
import Modal from 'react-awesome-modal'
import { Form,Label,Input } from "reactstrap";
import {Button} from "react-bootstrap"
import Dialog from '@material-ui/core/Dialog';
import swal from "sweet-alert"
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'


const Home = () => {
  var sizes, colors, shoes, gradients, shoeBackground, shoeHeight;
  var prevColor = "blue";
  var animateOrNot = true;
  const [showdilg,setshow] = React.useState(false)
  const [check,setCheck]=React.useState(true)
  const [valid,setValid]=React.useState(false)
  const [username,setUsername]=React.useState('')
  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')
  function changeColor() {
    if (!animateOrNot) {
      console.log("waittttt");
      return;
    }
    var primary = this.getAttribute("primary");
    var color = this.getAttribute("color");
    var shoe = document.querySelector(`.shoe[color="${color}"]`);
    var gradient = document.querySelector(`.gradient[color="${color}"]`);
    var prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // showing correct color
    colors.forEach(color => color.classList.remove("active"));
    this.classList.add("active");
      // $('.shoeBackground').css('background-image',"url("+btc+")")
    // changing primary css variable
    document.documentElement.style.setProperty("--primary", primary);

    // showing correct img
    shoes.forEach(s => s.classList.remove("show"));
    shoe.classList.add("show");

    // dealing with gradient
    gradients.forEach(g => g.classList.remove("display", "behind"));
    prevGradient.classList.add("behind");
    gradient.classList.add("display");

    // logic
    prevColor = color;
    animateOrNot = false;

    // hack
    setTimeout(() => {
      animateOrNot = true;
    }, 800);
  }

  function changeSize() {
    sizes.forEach(size => size.classList.remove("active"));
    this.classList.add("active");
  }

  // for responsive behaviour
  const changeHeight = () => {
    var x = window.matchMedia("(max-width:1000px)");

    !shoes ? (shoeHeight = 0) : (shoeHeight = shoes[0].offsetHeight);

    if (x.matches) {
      if (shoeHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Something is Wrong!!");
        }
      }
      shoeBackground.style.height = `${shoeHeight * 0.9}px`;
    } else if (!!shoeBackground) {
      // go back to default
      shoeBackground.style.height = "475px";
    }
  };
const handlechange = () => {
  console.log("sdsdsds")
  setshow(true)
}
  useEffect(() => {
    sizes = document.querySelectorAll(".size");
    colors = document.querySelectorAll(".color");
    shoes = document.querySelectorAll(".shoe");
    gradients = document.querySelectorAll(".gradient");
    shoeBackground = document.querySelector(".shoeBackground");

    colors.forEach(color => color.addEventListener("click", changeColor));
    sizes.forEach(size => size.addEventListener("click", changeSize));
    changeHeight();
  }, []);
  window.addEventListener("resize", changeHeight);

  return (
    <div className="Home">
      
      <div className="container">
     
        <div className="card">
          <div className="shoeBackground">
            <Gradients />

            <h5 className="nike">Ant<br/>Eagle<br/><span style={{fontSize:"3rem",marginTop:"-10px",top:"228px",position:"absolute",left:"123px"}}>Exchange</span></h5>
            <img src={logo} style={{backgroundColor:"white",borderRadius:'100px',width:"70px",top:"8px"}} alt="logo" className="logo" />
            <a href="/#" className="share">
              <i className="fas fa-share-alt"></i>
            </a>

            <ProductImages />
          </div>
          <Info handlechange={handlechange} />
        </div>
        <Dialog  
                    open={showdilg}
                    onClose={()=>{
                      setshow(false)
                    }}
                >
  
        <div className="home-form">         
          <label>Full Name:</label><br/>
          <input className="form-input" type="text" placeholder="Enter  your Name*" onChange={(event)=>{
              setUsername(event.target.value)
              if(event.target.value.length==0){
                setCheck(true)
              }
              else{
                setCheck(false)
              }
            
          }} /><br/>
         
          <label className="form-label" >Email Address:</label><br/>
          <input className="form-input" type="email" placeholder="Enter  your Email*" onChange={(event)=>{
              setEmail(event.target.value)
              if(event.target.value.length==0){
                setCheck(true)
              }
              else{
                setCheck(false)
              }
          }} /><br/>

          <label className="form-label" >Phone Number:</label><br/>
          <input className="form-input" type="number" placeholder="Enter  your password" onChange={(event)=>{
            setPassword(event.target.value)
            
            if(event.target.value.length==0){
              setCheck(true)
              setValid(false)
            }
            else{
              setCheck(false)
              setValid(true)
            }

            
           
          }} /><br/><br/>

          <button disabled={!valid || check} className="form-button" onClick={()=>{
              axios({
                method : "POST",
                url : `https://api.anteagle.tech/campaign?name=${username}&email=${email}&phone=${password}`,
            
              }).then(async res=>{
                console.log(res.data)
                setshow(false)
                Swal.fire({
                  title: 'Success!',
                  text: 'Thank you reaching out with us, Our Expert will contact you very Soon.',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              })
          }}>Submit</button>
      </div>
  
        </Dialog>
      </div>
    </div>
  );
};

export default Home;
