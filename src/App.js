import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
