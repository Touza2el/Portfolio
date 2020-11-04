import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '';

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <section className='register-login-screen'>
      <div className='container'>
        <div className='register-login-screen-content'>
          <div className='form-title'>
            <h1>sign in</h1>
          </div>
          {error && (
            <div className='form-error'>
              <p>{error}</p>
            </div>
          )}
          {loading && (
            <div className='form-loading'>
              <p>Loading...</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label>Email : </label>
              <input
                type='email'
                name='email'
                value={email}
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-input'>
              <label>Password : </label>
              <input
                type='password'
                name='password'
                value={password}
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-btn'>
              <input type='submit' value='LOGIN' />
            </div>
          </form>
          <div className='form-footer'>
            <p>
              New customer ?
              <Link
                to={redirect ? `/register?redirect=${redirect}` : `/register`}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
