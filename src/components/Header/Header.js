import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import webFont from 'webfontloader';

const Header = () => {
  const [headerDisplay, setHeaderDisplay] = useState('header_displayNone');
  const [buttonDisplay, setButtonDisplay] = useState('openMenu_Display');

  const hideHeader = () => {
    setHeaderDisplay('header_displayNone');
    setButtonDisplay('openMenu_Display');
  };

  const displayHeader = () => {
    setHeaderDisplay('header');
    setButtonDisplay('openMenu_DisplayNone');
  };

  return (
    <div className="newOuterDiv">
      <MenuIcon className={buttonDisplay} onClick={displayHeader} />
      <div className={headerDisplay}>
        <div className="hambergur_Menu">
          <CloseIcon className="CloseIcon" onClick={hideHeader} />
        </div>
        <div className="navBar">
          <div className="logo">ECOMMERCE</div>
          <div className="navMenu">
            <div className="home">
              <Link to="/home">Home </Link>
            </div>
            <div className="product">
              <Link to="/products">Products</Link>
            </div>
            <div className="contact">Contact</div>
            <div className="about">
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="navIcons">
            <div className="searchIcon">
              <Link to="/search">
                <SearchIcon />
              </Link>
            </div>
            <div className="cartIcon">
              <LocalMallIcon />
            </div>
            <div className="profileIcon">
              <Link to="/login">
                <PersonIcon />{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
