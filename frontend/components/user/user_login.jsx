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

  render() {
    return(
      <div className="login">
        <Link to={`/signup`} className="sign-up">Sign In</Link>
        <form onSubmit={event => this.submitForm(event)}>
          <input type="text" onChange={this.update("user_item")} name="fullName" placeholder="Email or Username"></input>
          <input type="password" onChange={this.update("password")} name="email" placeholder="Password"></input>

          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

export default UserLogin;
