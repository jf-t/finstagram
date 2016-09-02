import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserSignupContainer from '../user/user_signup_container';
import UserLoginContainer from '../user/user_login_container';
import UserProfileContainer from '../user/user_profile_container';
import App from '../app';
import HomeIndexContainer from '../containing/home_index_container';
import FeedContainer from '../feed/feed_container';
import UploadFormContainer from '../upload/upload_container';
import { addImage } from '../../actions/image_actions';
import ImageDetailContainer from '../image_detail/image_detail_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props)
  }
  redirectIfNotLoggedIn(nextState, replace) {
    if (nextState.params.id === "0") {
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
          <IndexRoute component={ FeedContainer } />
          <Route path="/upload" component={UploadFormContainer} onEnter={this.redirectIfNotLoggedIn}/>
          <Route path="/profile/:id" component={ UserProfileContainer } onEnter={this.redirectIfNotLoggedIn} />
          <Route path="/images/:id" component={ ImageDetailContainer }/>
          <Route path="/signup" component={ UserSignupContainer } />
          <Route path="/login" component={ UserLoginContainer } />
        </Route>
      </Router>
    )
  }
}
export default AppRouter;
