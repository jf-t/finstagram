import React from 'react';
import { userfromId } from '../../util/user_api_util';
import EditProfile from './edit_profile';
import { hashHistory, Link } from 'react-router';


class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.createHiddenModals = this.createHiddenModals.bind(this);
  }

  componentWillMount() {
    this.props.requestUser(this.props.pageUserId);
  }

  componentDidMount() {
    if (this.pageUser.followers.length > 0) {
      this.createHiddenModals();
    }
  }

  componentDidUpdate() {
    if (!this.props.currentUser.user) {
      hashHistory.push("/login");
    }
    let editProForm = document.getElementById("edit-pro-form");
    if (!editProForm) {
      this.createHiddenModals();
    }
  }

  createHiddenModals() {
    debugger;
    this.editStuff = (
      <div id="edit-pro-form">
        <EditProfile editUser={this.props.editUser} user={this.props.currentUser}/>
      </div>
    );
    let followersList = this.pageUser.followers.map(follower => {
      return <li key={follower.id}>
               <Link to={`/profile/${follower.id}`}>
                 <span className="">{follower.full_name}</span>
                 <span className="follow-username">@{follower.username}</span>
               </Link>
             </li>
    });
    let followingList = this.pageUser.following.map(following => {
      return <li key={following.id}>
               <Link to={`/profile/${following.id}`}>
                 <span className="">{following.full_name}</span>
                 <span className="follow-username">@{following.username}</span>
               </Link>
             </li>
    });


    this.followersModal = (
      <div id="followers-modal" className="modal-form">
        <span onClick={this.hideFollowers} className="close-modal">X</span>
        {followersList}
      </div>
    );
    this.followingModal = (
      <div id="following-modal" className="modal-form">
        <span onClick={this.hideFollowing} className="close-modal">X</span>
        {followingList}
      </div>
    );

    if (!this.props.currentUser.user) {
      hashHistory.push('/login');
    }
    this.setState({hey: "whatsup"})
  }

  showEditForm() {
    let editProForm = document.getElementById("edit-pro-form");
    editProForm.style.display = "block";
  }

  showFollowers() {
    let editProForm = document.getElementById("followers-modal");
    editProForm.style.display = "block";
  }

  showFollowing() {
    let editProForm = document.getElementById("following-modal");
    editProForm.style.display = "block";
  }

  hideFollowers() {
    let editProForm = document.getElementById("followers-modal");
    editProForm.style.display = "none";
  }

  hideFollowing() {
    let editProForm = document.getElementById("following-modal");
    editProForm.style.display = "none";
  }

  render() {
    let user = "";
    if (!this.props.currentUser.user) {
      hashHistory.push('/login');
    }
    if (this.props.currentUser.user.id.toString() === this.props.pageUserId) {
      this.pageUser = this.props.currentUser.user;
    }
    if ((Object.keys(this.props.pageUser).length > 0) && this.props.pageUser.id.toString() === this.props.pageUserId) {
      this.pageUser = this.props.pageUser
    }

    if (this.pageUser) {
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
      this.pageUser = {following: {}, followers: {}, images: []}
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
            <div className="follow-info">
              <span onClick={this.showFollowers} className="followers">{this.pageUser.followers.length} followers</span>
              <span onClick={this.showFollowing} className="following">{this.pageUser.following.length} following</span>
              <span className="posts">{this.pageUser.images.length} posts</span>
            </div>
            <div className="bio-container">
              <p className="bio">{this.pageUser.bio}</p>
            </div>
          </div>
          <div className="edit-profile-link">
            <a onClick={this.showEditForm}>Edit Profile</a>
          </div>
          {this.editStuff}
          {this.followersModal}
          {this.followingModal}
        </div>
        <div className="image-feed">
          {this.feedItems}
        </div>
      </div>
    )
  }
}


export default UserProfile
