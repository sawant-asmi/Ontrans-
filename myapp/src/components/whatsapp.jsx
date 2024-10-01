import React from 'react';
import whatsapp_icon from './asserts/whatsapp_icon.png';
import { Image } from 'react-bootstrap';

const whatsapp = () => {
  return (
    <div style={{position: "fixed", bottom: "0", right: "0", marginRight: "20px", marginBottom: "20px", boxShadow: "0px 1px 0px #888888", borderRadius: "30px", zIndex: "9999"}}>
      <a href="https://wa.me/8976071984" target="_blank" rel="noopener noreferrer">
        <Image src={whatsapp_icon} style={{width: "60px", height: "60px",  borderRadius: "30px"}}/>
      </a>
    </div>
  );
};

export default whatsapp;
