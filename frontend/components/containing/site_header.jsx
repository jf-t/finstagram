import React from 'react';
import { Link, hashHistory } from 'react-router';
import SearchContainer from '../search/search_container';
import { readNotif } from '../../util/image_api_util';

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
      e.target.parentElement.parentElement.className = "read"
      let newUnread = this.state.unreadNotifs;
      newUnread--;
      this.setState({unreadNotifs: newUnread})
    }
    hashHistory.push(notif.url);
  }

  render () {
    let innout;
    if (this.props.currentUser) {
      innout = <li><a onClick={this.logout}>Sign Out</a></li>
    } else {
      innout = <li><Link to={"/login"}>Sign In</Link></li>
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
        return (<li key={notif.id} className={listItemClass}>
                <a onClick={(e) => this.readNotif(e, notif)} className="notification">
                  <span className="notification-text">{notif.notification}</span>
                  <div className="notification-img"><img src={notif.image_url} /></div>
                </a>
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
              <li><a onClick={this.showNotifs}>{this.state.unreadNotifs}</a></li>
              <li><Link to={'/upload'}>Add Image</Link></li>
              <li><Link to={`/profile/${currentId}`}>Profile</Link></li>
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
