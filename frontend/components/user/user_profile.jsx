import React from 'react';
import { userfromId } from '../../util/user_api_util';
import EditProfile from './edit_profile';
import { hashHistory } from 'react-router';


class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.receiveUser(this.pageUserId);
  }
  componentDidUpdate() {
    console.log('please update');
    if (!this.props.currentUser.user) {
      hashHistory.push("/login");
    }
  }

  componentDidMount() {
    this.editStuff = (
      <div id="edit-pro-form">
        <EditProfile editUser={this.props.editUser} user={this.props.currentUser}/>
      </div>
    );
    if (!this.props.currentUser.user) {
      hashHistory.push('/login');
    }
  }

  showEditForm() {
    let editProForm = document.getElementById("edit-pro-form");
    editProForm.style.display = "block";
  }

  render() {
    let user = "";
    if (!this.props.currentUser.user) {
      hashHistory.push('/login');
    }
    if (this.props.currentUser.user) {
      user = this.props.currentUser.user
    }
    if (this.props.currentUser.user.images.length > 0) {
      let images = this.props.currentUser.user.images
      this.feedItems = images.map((img) => {
        return (
          <div key={img.id} className="feed-item">
            <div className="feed-img-cont">
              <img src={img.image_url} />
            </div>
            <p className="caption">{img.caption}</p>
          </div>
        )
      })
    } else {
      this.feedItems = <div></div>
    }

    return(
      <div className="main">
        <div className="profile-info row">
          <div className="profile-pic col-sm-4">
            <img src={user.image_url} />
          </div>
          <div className="col-sm-8">
            <h1>{user.full_name}</h1>
            <h4>@{user.username}</h4>
            <div className="bio-container">
              <p className="bio">{user.bio}</p>
            </div>
          </div>
          <div className="edit-profile-link">
            <a onClick={this.showEditForm}>Edit Profile</a>
          </div>
          {this.editStuff}
        </div>
        <div className="image-feed">
          {this.feedItems}
        </div>
      </div>
    )
  }
}


export default UserProfile
