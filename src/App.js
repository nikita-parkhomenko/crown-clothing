import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import HomePage from './pages/homepage/homepage'

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
