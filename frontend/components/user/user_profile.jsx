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
      <div className="main">
        <div className="profile-info">
          <div className="profile-pic">
            <img src={user.image_url} />
          </div>
          <h1>{user.full_name}</h1>
          <h3>{user.username}</h3>
        </div>
      </div>
    )
  }
}


export default UserProfile
