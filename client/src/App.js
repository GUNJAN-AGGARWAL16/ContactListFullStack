import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alerts from './component/layout/Alerts';
import setAuthToken from './utills/setAuthToken';
import PrivateRoute from './component/routing/PrivateRoute';

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

fetch("https://contactlistfullstackb.onrender.com/")

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;