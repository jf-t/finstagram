import React from 'react';
import { hashHistory, Link} from 'react-router';
class UserLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_item: "",
      password: ""
    }
    this.submitForm.bind(this)
    this.update.bind(this);
    this.guestUser = this.guestUser.bind(this);
  }
  componentDidUpdate() {
    this.loggedIn();
  }

  loggedIn() {
    let user = this.props.user.user
    if (user) {
      hashHistory.push(`/profile/${user.id}`)
    }
  }

  submitForm(e) {
    e.preventDefault();
    let user = this.state;
    this.props.login(user);
  }

  update(prop) {
    return e => {
      this.setState({[prop]: e.target.value});
    }
  }

  guestUser(e) {
    this.state = {
      user_item: "example@gmail.com",
      password: "password"
    };
    this.submitForm(e);
  }

  render() {
    let error;
    if (this.props.user.errors) {
      if (this.props.user.errors[0] != "Invalid username/password combination") {
        error = "";
      } else {
        error = this.props.user.errors[0];
      }
    }
    return(
      <div className="modal-form">
        <h4>Login</h4>
        <div className="error-show">{error}</div>
        <form onSubmit={event => this.submitForm(event)}>
          <input type="text" onChange={this.update("user_item")} name="fullName" placeholder="Email or Username"></input>
          <input type="password" onChange={this.update("password")} name="email" placeholder="Password"></input>
          <input type="submit" value="submit"></input>
        </form>
        <div className="login-links">
          <a className="guest-user" onClick={this.guestUser}>Guest User</a>
          <Link to={`/signup`} className="sign-up">Sign Up</Link>
        </div>
      </div>
    )
  }
}

export default UserLogin;
