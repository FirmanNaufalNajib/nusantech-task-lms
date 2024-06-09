import React from 'react';
import './components-styles.css';
import SVGLogo from './svgComponents/svglogo';
import { SVGBasketball, SVGInstagram, SVGTwitter, SVGYoutube } from './svgComponents/svgsocmed';
import DownloadGoogleplay from '../assets/image/download-googleplay.png';
import DownloadAppleStore from '../assets/image/download-applestore.png';


const Footer = () => (
  <footer className="footer">

      <div className="footer-section-left">
        <div className="footer-svg-logo"><SVGLogo/></div>
        <p>Copyright © Nusantech</p>
        <p>All rights reserved</p>

        <div className='footer-socmed'>
          <div className='footer-logo'><i className="bi bi-instagram"></i></div>
          <div className='footer-logo'><i className="bi bi-dribbble"></i></div>
          <div className='footer-logo'><i className="bi bi-twitter"></i></div>
          <div className='footer-logo'><i className="bi bi-youtube"></i></div>
        </div>

        

      </div>


      <div className="footer-section-right">

      <div className="footer-section-content">
        <h4>Perusahaan</h4>
        <a href="/#">Tentang Kami</a>
        <a href="#">Blog</a>
        <a href="#">Kontak</a>
        <a href="#">Testimoni</a>

      </div>

      <div className="footer-section-content">
      <h4>Dukungan</h4>
        <a href="#" target="_blank" >Pusat Bantuan</a>
        <a href="#" target="_blank" >Syarat & Ketentuan</a>
        <a href="#" target="_blank" >Cek Sertifikat</a>
      </div>

      <div className="footer-section-content">
      <h4>Download NusaLMS Mobile</h4>
      <a href="#" target="_blank"><img src={DownloadGoogleplay} alt="Google Playstore"/></a>
      <a href="#" target="_blank"><img src={DownloadAppleStore} alt="Apple Store"/></a>
      </div>

    </div>
  </footer>
);

export default Footer;
