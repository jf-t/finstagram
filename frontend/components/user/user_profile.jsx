import React from 'react';
import { userfromId } from '../../util/user_api_util';
import EditProfile from './edit_profile';
import { hashHistory, Link } from 'react-router';
import { addFollow, removeFollow } from '../../util/user_api_util';
import _mapOptions from '../../util/map_options';
import MarkerManager from '../../util/marker_manager';
import { addNotif } from '../../util/image_api_util';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.createHiddenModals = this.createHiddenModals.bind(this);
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
    this.addMap = this.addMap.bind(this);
  }

  componentWillMount() {
    this.props.requestUser(this.props.pageUserId);
  }

  componentDidMount() {
    if (this.refs.map) {
      this.addMap();
    }
  }

  componentDidUpdate() {
    if (this.refs.map) {
      this.addMap();
    }
    if (!this.props.currentUser.user) {
      hashHistory.push("/login");
    }
    this.state = null;
    this.createHiddenModals();
  }

  addMap() {
    const mapDOMNode = this.refs.map;

    this.map = new google.maps.Map(mapDOMNode, _mapOptions);
    this.marker_manager = new MarkerManager(this.map);
    this.marker_manager.updateMarkers(this.props.pageUser.images);
  }


  createHiddenModals() {
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

    let privateItem = document.getElementById('private-tester');
    if (privateItem) {
      let link1 = document.getElementById('followers-disable');
      let link2 = document.getElementById('following-disable');
      link1.className = "followers disabled"
      link2.className = "following disabled"
    }
  }

  followUser() {
    let notification;
    let url;
    if (this.props.pageUser.private) {
      notification = `${this.props.currentUser.user.username} would like to follow you`
      url = `/profile/${this.props.currentUser.user.id}`;
      addNotif(this.props.pageUserId, notification, url);
      this.setState({follow: "requested"});
    } else {
      notification = `${this.props.currentUser.user.username} followed you!`
      url = `/profile/${this.props.currentUser.user.id}`;
      addNotif(this.props.pageUserId, notification, url);
      addFollow(this.props.pageUserId, this.props.currentUser.user.id);
      this.setState({follow: "yes"});
    }
  }

  unfollowUser() {
    removeFollow(this.props.pageUserId);
    this.setState({follow: "no"});
  }

  showEditForm() {
    let editProForm = document.getElementById("edit-pro-form");
    editProForm.style.display = "block";
  }

  showFollowers() {
    let followers = document.getElementById("followers-modal");
    followers.style.display = "block";
  }

  showFollowing() {
    let following = document.getElementById("following-modal");
    following.style.display = "block";
  }

  hideFollowers() {
    let followers = document.getElementById("followers-modal");
    followers.style.display = "none";
  }

  hideFollowing() {
    let following = document.getElementById("following-modal");
    following.style.display = "none";
  }

  render() {
    let user = "";
    if (!this.props.currentUser.user) {
      hashHistory.push('/login');
    }
    if ((Object.keys(this.props.pageUser).length > 1) && this.props.pageUser.id.toString() === this.props.pageUserId) {
      this.pageUser = this.props.pageUser
    }

    let editorno;
    if (this.props.currentUser.user.id.toString() === this.props.pageUserId) {
      editorno = (
      <div className="edit-profile-link">
        <a onClick={this.showEditForm}>Edit Profile</a>
      </div>
      )
    } else {
      let pageUserId = this.props.pageUserId;
      let flag = "no";
      if (!this.state) {
        this.props.currentUser.user.following.forEach(followee => {
          if (followee.id.toString() === pageUserId) {
            flag = "yes";
          }
        });
      } else {
        flag = this.state.follow;
      }
      if (flag === "yes") {
        editorno = (
          <div className="follow-user">
            <a onClick={this.unfollowUser}>Unfollow</a>
          </div>
        )
      } else if (flag === "no") {
        editorno = (
          <div className="follow-user">
            <a onClick={this.followUser}>Follow</a>
          </div>
        )
      } else {
        editorno = (
          <div className="follow-user disabled">
            <a>Requested</a>
          </div>
        )
      }
    }
    if (this.pageUser) {
      if ((this.pageUser.private) && ((editorno.props.children._shadowChildren === "Follow")||(editorno.props.children._shadowChildren === "Requested"))) {
        this.feedItems = <div id="private-tester"><span className="private-text">User is private</span><i className="fa fa-lock private-lock"></i></div>
        } else if (this.pageUser.images.length === 0) {
          this.feedItems = (
            <div>
              <div className="map-prof-cont">
                <div id="map-prof" ref="map">
                  Map
                </div>
              </div>
            </div>
          )
        }
      else {
        let images = this.pageUser.images
        let feedChildren = images.map((img) => {
          return (
            <Link key={img.id} to={`/images/${img.id}`}>
              <div className="feed-item">
                <div className="feed-img-cont">
                  <img src={img.image_url} />
                </div>
              </div>
            </Link>
          )
        })
        this.feedItems =(
          <div>
            <div className="map-prof-cont">
              <div id="map-prof" ref="map">
                Map
              </div>
            </div>
            {feedChildren}
          </div>
        )
      }
    } else {
      this.pageUser = {following: {}, followers: {}, images: []}
    }
    let content;
    if ((this.props.pageUser.loading === true) || (this.props.pageUser.id.toString() !== this.props.pageUserId)) {
      setTimeout(() => this.props.requestUser(this.props.pageUserId), 100);
      content = (
        <div className="loading-icon">
          <h1>loading...</h1>
        </div>
      )
    } else {
      this.createHiddenModals();
      content = (
        <div className="main">
          <div className="profile-info row">
            <div className="profile-pic col-sm-4">
              <img src={this.pageUser.image_url} />
            </div>
            <div className="col-sm-8">
              <h1>{this.pageUser.full_name}</h1>
              <h4>@{this.pageUser.username}</h4>
              <div className="follow-info">
                <a id="followers-disable" onClick={this.showFollowers} className="followers">{this.pageUser.followers.length} followers</a>
                <a id="following-disable" onClick={this.showFollowing} className="following">{this.pageUser.following.length} following</a>
                <a className="posts">{this.pageUser.images.length} posts</a>
              </div>
              <div className="bio-container">
                <p className="bio">{this.pageUser.bio}</p>
              </div>
            </div>
            {editorno}
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



    return content
  }
}


export default UserProfile
