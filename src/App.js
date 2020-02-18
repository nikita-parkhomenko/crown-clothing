import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import CheckoutPage from './pages/checkout/checkout-page';

import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'

import { auth, createUserProfileDocument } from './fiebase/firebase.utils';
import { setCurrentUser }  from './redux/user/user.actions';

import './App.css';

class App extends Component {

unsubscribeFromAuth = null;

componentDidMount() {

  const { setCurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot( snapshot => {
        const user = {
          id: snapshot.id,
          ...snapshot.data()
        }

        setCurrentUser(user)
      })
    } else {
      setCurrentUser( userAuth )
    }
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth()
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/sign-in' render={ () => this.props.currentUser ? 
              (<Redirect to='/' />) 
                : 
              (<SignInSignUp />)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
