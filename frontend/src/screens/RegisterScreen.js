import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split('=')[1] : '';

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match !!');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <section className='register-login-screen'>
      <div className='container'>
        <div className='register-login-screen-content'>
          <div className='form-title'>
            <h1>sign Up</h1>
          </div>
          {message && (
            <div className='form-message'>
              <p>{message}</p>
            </div>
          )}
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
              <label>Name : </label>
              <input
                type='text'
                name='name'
                value={name}
                placeholder='Enter name'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className='form-input'>
              <label>Confirm Password : </label>
              <input
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className='form-btn'>
              <input type='submit' value='REGISTER' />
            </div>
          </form>
          <div className='form-footer'>
            <p>
              Have an account ?
              <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;
