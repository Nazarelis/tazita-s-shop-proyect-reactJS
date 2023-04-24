import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='div-container' >
        <h3 className='title'>Tazita's Shop</h3>
        <div>
          <a href="https://www.facebook.com/"><FaFacebook style={{ marginRight: '1rem' }} /></a>
          <a href="https://www.instagram.com/"><FaInstagram style={{ marginRight: '1rem' }} /></a>
          <a href="https://www.twitter.com/"><FaTwitter style={{ marginRight: '1rem' }} /></a>
        </div>
      </div>
      <p className='parrafo'>© Tazita's Shop. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
