import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android Or IOS Mobile Phone</p>
        <div>
          <GoogleIcon className="googleIcon" />
          <AppleIcon className="appleIcon" />
        </div>
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality Is Our First Priority</p>
        <p>CopyRight 2022 CopyRight@ : SaghirAhmad </p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us!</h4>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
};

export default Footer;
