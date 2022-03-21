import React, { Fragment, useState, useEffect, useRef } from 'react';
import './LoginSignUp.css';
import Loader from '../Loader/Loader.js';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import FaceIcon from '@mui/icons-material/Face';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })

  const [avatar,setAvatar]=useState('')

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const switchTabs = (e, tab) => {
    if (tab === 'login') {
      switcherTab.current.classList.add('shiftToNeutral');
      switcherTab.current.classList.remove('shiftToRight');
      registerTab.current.classList.remove('shiftToNeutralForm');

      loginTab.current.classList.remove('shiftToLeft');
    }
    if (tab === 'register') {
      switcherTab.current.classList.add('shiftToRight');
      switcherTab.current.classList.remove('shiftToNeutral');

      registerTab.current.classList.remove('shiftToNeutralForm');

      loginTab.current.classList.remove('shiftToLeft');
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted Signin');
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted signUp');
  };
  const registerDataChange=()=>{}

  // const registerDataChange = (e) => {
  //   e.preventDefault()
  //   const myForm=new FormData()
  //   myForm.set('name',singUpName)
  //   myForm.set('email',singUpEmail)
  //   myForm.set('name',singUpPassword)
  //   // myForm.set('name',singUpAvtar)
  // };

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login-signup-toggle">
              <p onClick={(e) => switchTabs(e, 'login')}>Login</p>
              <p onClick={(e) => switchTabs(e, 'register')}>Register</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeHolder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockIcon />
              <input
                type="password"
                placeHolder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forget">Forget Password</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />
              <input
                type="text"
                placeHolder="Name"
                required
                // value={singUpName}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <FaceIcon />
              <input
                type="email"
                placeHolder="Email"
                required
                // value={signUpEmail}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <FaceIcon />
              <input
                type="password"
                placeHolder="Pasword"
                required
                // value={signUpPassword}
                onChange={registerDataChange}
              />
            </div>

            <div id="registerImage">
              {/* <img src={avatarPreview} alt="Avatar Preview" /> */}
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>

            <input
              tupe="submit"
              value="Register"
              className="signUpBtn"
              // disabled={loading?true:false}
            />
          </form>
        </div>
      </div>
    </Fragment>
    //  <></>
  );
};

export default LoginSignUp;
