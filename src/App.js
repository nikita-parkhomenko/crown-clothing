import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInSignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
