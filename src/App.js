import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { auth } from './fiebase/firebase.utils';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'

import './App.css';

class App extends Component {

state = {
  currentUser: null
}

unsubscribeFromAuth = null;

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
    this.setState({ currentUser: user })

    console.log(user)
  } )
}

componentWillUnmount() {
  this.unsubscribeFromAuth()
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/sign-in' component={SignInSignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
