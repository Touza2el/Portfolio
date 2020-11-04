import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header>
      <div className='container'>
        <div className='header-content'>
          <div className='brand-name'>
            <Link to='/'>3Prod.</Link>
          </div>
          <nav className='nav-links'>
            <ul>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/store'>store</Link>
              </li>
              <li>
                <Link to='/blog'>blog</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>
          </nav>
          <div className='log-systeme'>
            {userInfo ? (
              <div className='login-user-btn'>
                <span className='user'>
                  <i className='fas fa-user'></i>
                  <span>{userInfo.user.name}</span>
                </span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className='new-user-btn'>
                <Link to='/register'>sign up</Link>
                <Link to='/login'>Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
