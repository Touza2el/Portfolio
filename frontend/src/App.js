import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Route exact path='/' component={HomeScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
