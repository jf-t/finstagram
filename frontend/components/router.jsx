import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserSignupContainer from './user/user_signup_container';
import UserLoginContainer from './user/user_login_container';
import UserProfileContainer from './user/user_profile_container';
import App from './app';
import HomeIndexContainer from './containing/home_index_container';


class AppRouter extends React.Component {
  redirectIfNotLoggedIn(nextState, replace) {
    if (!store.getState().user.user) {
      replace("/login");
    }
  }

  addHome (nextState, replace) {
    replace("/home");
  }

  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={ App } onEnter={this.addHome}></Route>
        <Route path="/home" component={ HomeIndexContainer }>
          <Route path="/profile/:id" component={ UserProfileContainer } onEnter={this.redirectIfNotLoggedIn}/>
          <Route path="/signup" component={ UserSignupContainer } />
          <Route path="/login" component={ UserLoginContainer } />
        </Route>
      </Router>
    )
  }
}
export default AppRouter;
