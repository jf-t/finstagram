import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserSignupContainer from './user/user_signup_container';
import UserLoginContainer from './user/user_login_container';
import UserProfileContainer from './user/user_profile_container';
import App from './app'


class AppRouter extends React.Component {
  redirectIfNotLoggedIn(nextState, replace) {
    if (!store.getState().user.user) {
      replace("/login");
    }
  }

  redirectToProfile(nextState, replace) {
    replace("/profile");
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={ App }>
          <Route path="/profile/:id" component={ UserProfileContainer } onEnter={this.redirectIfNotLoggedIn}/></Route>
          <Route path="/signup" component={ UserSignupContainer } onEnter={this.redirectIfLoggedIn}></Route>
          <Route path="/login" component={ UserLoginContainer } onEnter={this.redirectIfLoggedIn}></Route>
      </Router>
    )
  }
}
export default AppRouter;
