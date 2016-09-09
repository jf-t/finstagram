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
    super(props);
    this.redirectIfNotLoggedIn = this.redirectIfNotLoggedIn.bind(this);
  }
  redirectIfNotLoggedIn(nextState, replace) {
    if (nextState.params.id === "0") {
      replace("/login");
    } else {
      this.addHighlight(nextState);
    }
  }

  addHighlight(nextState) {
    let path = nextState.location.pathname.split("/")[1];
    switch(path) {
      case 'home':
        if (document.getElementById('home-link')) {
          document.getElementById('home-link').className="active-nav";
          document.getElementById('upload-link').className="";
          document.getElementById('user-link').className=""
          document.getElementById('logout-link').className="";
        }
        break;
      case 'upload':
        if (document.getElementById('home-link')) {
          document.getElementById('home-link').className="";
          document.getElementById('upload-link').className="active-nav";
          document.getElementById('user-link').className=""
          document.getElementById('logout-link').className="";
        }
        break;
      case 'profile':
        if (document.getElementById('home-link')) {
          document.getElementById('home-link').className="";
          document.getElementById('upload-link').className="";
          document.getElementById('user-link').className="active-nav"
          document.getElementById('logout-link').className="";
        }
        break;
      case 'login':
        if (document.getElementById('home-link')) {
          document.getElementById('home-link').className="";
          document.getElementById('upload-link').className="";
          document.getElementById('user-link').className="";
          document.getElementById('login-link').className="active-nav";
        }
      default:
        if (document.getElementById('home-link')) {
          document.getElementById('home-link').className="";
          document.getElementById('upload-link').className="";
          document.getElementById('user-link').className="";
        }
    }
  }


  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={ App }></Route>
        <Route path="/home" component={ HomeIndexContainer } onEnter={this.addHighlight}>
          <IndexRoute component={ FeedContainer } onEnter={this.addHighlight} />
          <Route path="/upload" component={UploadFormContainer} onEnter={this.redirectIfNotLoggedIn}/>
          <Route path="/profile/:id" component={ UserProfileContainer } onEnter={this.redirectIfNotLoggedIn} />
          <Route path="/images/:id" component={ ImageDetailContainer } onEnter={this.addHighlight}/>
          <Route path="/signup" component={ UserSignupContainer } onEnter={this.addHighlight}/>
          <Route path="/login" component={ UserLoginContainer } onEnter={this.addHighlight}/>
        </Route>
      </Router>
    )
  }
}
export default AppRouter;
