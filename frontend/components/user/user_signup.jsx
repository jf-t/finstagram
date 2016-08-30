import React from 'react';
import { hashHistory } from 'react-router';
class UserSignup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      full_name: "",
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
    this.props.signup(user);
  }

  update(prop) {
    return e => {
      this.setState({[prop]: e.target.value});
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.submitForm(event)}>
          <input type="text" onChange={this.update("full_name")} name="fullName" placeholder="Full Name"></input>
          <input type="text" onChange={this.update("email")} name="email" placeholder="Email"></input>
          <input type="text" onChange={this.update("username")} name="username" placeholder="Desired Username"></input>
          <input type="password" onChange={this.update("password")} name="password" placeholder="Password"></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

export default UserSignup;
