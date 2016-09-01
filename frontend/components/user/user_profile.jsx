import React from 'react';
import { userfromId } from '../../util/user_api_util';
import EditProfile from './edit_profile';
import { hashHistory } from 'react-router';


class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestUser(this.props.pageUserId);
  }

  componentDidUpdate() {
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
    if (this.props.currentUser.user.id.toString() === this.props.pageUserId) {
      this.pageUser = this.props.currentUser.user;
    }

    if ((Object.keys(this.props.pageUser).length > 0) || this.pageUser) {
      if (!this.pageUser) {
        this.pageUser = this.props.pageUser
      }
      if (this.pageUser.images.length > 0) {
        let images = this.pageUser.images
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
    } else {
      this.pageUser = ""
    }
    return(
      <div className="main">
        <div className="profile-info row">
          <div className="profile-pic col-sm-4">
            <img src={this.pageUser.image_url} />
          </div>
          <div className="col-sm-8">
            <h1>{this.pageUser.full_name}</h1>
            <h4>@{this.pageUser.username}</h4>
            <div className="bio-container">
              <p className="bio">{this.pageUser.bio}</p>
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
