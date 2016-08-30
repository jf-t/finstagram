import React from 'react';
import { userfromId } from '../../util/user_api_util';


class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentWillMount() {
    this.props.requestImages();
    userfromId(this.props.pageUserId, (user) => {
      this.setState({user: user})
    });
  }

  render() {
    let user = "";
    if (this.state.user) {
      user = this.state.user
    }
    return(
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
    )
  }
}


export default UserProfile
