import React, { Fragment, useState, useEffect } from 'react';
import './LoginSignUp2.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import FaceIcon from '@mui/icons-material/Face';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, register, clearErrors } from '../../actions/userActions.js';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const LoginSignUp2 = () => {
  const state = useSelector((state) => state);
  const { isAuthenticated, loading, error } = state.user;
  const token = state.user.token;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signUpName, setsignUpName] = useState('');
  const [signUpEmail, setsignUpEmail] = useState('');
  const [signUpPassword, setsignUpPassword] = useState('');
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log('sending request');
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    const userForm = new FormData();

    userForm.append('name', signUpName);
    userForm.append('email', signUpEmail);
    userForm.append('password', signUpPassword);
    // userForm.append('avatar', avatar);

    e.preventDefault();
    console.log(userForm);
    // dispatch(register(signUpName, signUpEmail, signUpPassword, avatar));
    dispatch(register(userForm));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account');
    }
    if (isAuthenticated && token) {
      setCookie('token', token, {
        path: '/',
        httpOnly: true,
      });
    }

    // dispatch(clearErrors());
  }, [isAuthenticated, dispatch, cookies]);

  return (
    <Fragment>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer2">
            <div className="LoginBox">
              <div>
                <div className="login-toggle">
                  <p>Login</p>
                  {/* <p onClick={(e) => switchTabs(e, 'register')}>Register</p> */}
                </div>
                {/* <button ref={switcherTab}></button> */}
              </div>
              <form className="loginForm" onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forget">Forget Password</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
            </div>
            {/* Sign Up Form Starts From  Here.................................................................................................. */}
            <div className="signUpBox">
              <div className="signUp-toggle">
                <p>SignUp</p>
              </div>
              <form
                className="signUpForm"
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={signUpName}
                    onChange={(e) => setsignUpName(e.target.value)}
                  />
                </div>
                <div className="signUpEmail">
                  <FaceIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={signUpEmail}
                    onChange={(e) => setsignUpEmail(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <FaceIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={signUpPassword}
                    onChange={(e) => setsignUpPassword(e.target.value)}
                  />
                </div>

                <div id="registerImage">
                  {/* <img src={avatarPreview} alt="Avatar Preview" className="signUpImage" /> */}
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </div>

                <input
                  className="signUpButton"
                  type="submit"
                  value="Register"

                  // disabled={loading?true:false}
                />
              </form>
            </div>
            <img src={avatar} alt="Avatar Preview" className="signUpImage" />
          </div>
          <button
            className="consoleButton"
            onClick={() => {
              console.log(token);
              console.log(state);
            }}
          >
            Click Here
          </button>
          <div className="cookiesBtn">
            {/* <h1>React cookies</h1> */}
            {/* <button onClick={handleCookie}>Set Cookie</button> */}
          </div>
          {/* {error && <h2 >There was some error</h2>} */}
          {error && <h2 className="errorHeading">{`${error}`}</h2>}
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp2;
