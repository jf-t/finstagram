import React from 'react';
import { Link, hashHistory } from 'react-router';
import SearchContainer from '../search/search_container';
import { readNotif, removeNotif, addNotif } from '../../util/image_api_util';
import { addFollow } from '../../util/user_api_util';

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
    let notificationLength = 0;
    if (this.props.currentUser) {
      this.props.currentUser.notifications.reverse();
      this.props.currentUser.notifications.forEach(notif => {
        if (notif.read === false) {
          notificationLength++;
        }
      });
    }
    this.state = {
      unreadNotifs: notificationLength
    }
    this.logout = this.logout.bind(this)
    this.readNotif = this.readNotif.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
    this.denyRequest = this.denyRequest.bind(this);
  }

  logout() {
    this.props.logoutUser()
  }

  showNotifs() {
    let notifList = document.getElementById('notif-dropdown');
    notifList.style.display = "block"
  }
  hideNotifs() {
    let notifList = document.getElementById('notif-dropdown');
    notifList.style.display = "none"
  }
  readNotif(e, notif) {
    readNotif(notif.id);
    if (notif.read === false) {
      if (e.target.parentElement.nodeName === "A") {
        e.target.parentElement.parentElement.className = "read"
      } else {
        e.target.parentElement.className = "read"
      }
      let newUnread = this.state.unreadNotifs;
      newUnread--;
      this.setState({unreadNotifs: newUnread})
    }
    hashHistory.push(notif.url);
  }
  acceptRequest(notif) {
    let id = notif.url.split("/")[2];
    let userNotif = notif.notification.split(" ")[0];
    let notification = `${userNotif} followed you!`;
    addFollow(this.props.currentUser.id, id);
    removeNotif(notif.id);
    addNotif(this.props.currentUser.id, notification, notif.url);
  }
  denyRequest(notif) {
    removeNotif(notif.id);
  }


  render () {
    let innout;
    if (this.props.currentUser) {
      innout = <li><a onClick={this.logout}><i className="fa fa-sign-out"></i></a></li>
    } else {
      innout = <li><Link to={"/login"}><i className="fa fa-sign-in"></i></Link></li>
    }
    let currentId;
    let notifications;
    if (this.props.currentUser) {
      currentId = this.props.currentUser.id
      let notificationKids = this.props.currentUser.notifications.map(notif => {
        let listItemClass;
        if (notif.read === false) {
          listItemClass = "unread"
        } else {
          listItemClass = "read"
        }
        let followReq = "";
        if (notif.notification.includes("would")) {
          followReq = (
            <div className="follow-request">
              <a onClick={() => this.acceptRequest(notif)}>Accept</a>
              <a onClick={() => this.denyRequest(notif)}>Deny</a>
            </div>
          )
        }
        return (<li key={notif.id} className={listItemClass}>
                <a onClick={(e) => this.readNotif(e, notif)} className="notification">
                  <span className="notification-text">{notif.notification}</span>
                  <div className="notification-img"><img src={notif.image_url} /></div>
                </a>
                {followReq}
              </li>)
      });
      notifications = <ul id="notif-dropdown"><a className="close-modal" onClick={this.hideNotifs}>X</a>{notificationKids}</ul>
    } else {
      currentId = 0;
      notifications = <div></div>
    }
    return(
      <div className="header">
        <div className="header-inner">
          <h1><Link to={'/home'}>Finstagram</Link></h1>
          <SearchContainer />
          <nav className="header-nav">
            <ul>
              <li><Link to={'/home'}><i className="fa fa-home"></i></Link></li>
              <li><a className="notif-button" onClick={this.showNotifs}><i className="fa fa-bell"></i><span className="num-notifs">{this.state.unreadNotifs}</span></a></li>
              <li><Link to={'/upload'}><i className="fa fa-plus-circle"></i></Link></li>
              <li><Link to={`/profile/${currentId}`}><i className="fa fa-user"></i></Link></li>
              {innout}
            </ul>
            {notifications}
          </nav>
        </div>
      </div>
    )
  }
}
export default SiteHeader
