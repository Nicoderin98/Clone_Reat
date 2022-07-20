import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  const iconstyle={
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fill: "#000",

  };
const footerstyle={
  backgroundColor: "#212529",
    color: "white",
    height: "auto",
    weight: "auto"
};
  return (

    <div className="text-center fs-1 "style={footerstyle}>
      <br />
      <div className='box'>
      <i className="bi bi-facebook" style={iconstyle}></i>
      <i className="bi bi-whatsapp"style={iconstyle} ></i>
      <i className="bi bi-instagram" style={iconstyle}></i>
      <i className="bi bi-envelope"style={iconstyle}></i>
      </div>
      <span className=' h5'>© 2021 Copyright: Nicolò De Rinaldis</span>

    </div>
  )
}

export default Footer
