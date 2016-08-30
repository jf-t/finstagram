import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUpdate() {
    this.props.requestImages();
  }

  render() {
    return(
      <ul>
        <li>{this.props.currentUser.username}</li>
      </ul>
    )
  }
}


export default UserProfile
