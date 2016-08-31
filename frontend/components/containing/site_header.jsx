import React from 'react';
import { Link } from 'react-router';

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logoutUser()
  }

  render () {
    let innout;
    if (this.props.currentUser) {
      innout = <li><a onClick={this.logout}>Sign Out</a></li>
    } else {
      innout = <li><Link to={"/login"}>Sign In</Link></li>
    }
    return(
      <div className="header">
        <div className="header-inner">
          <h1><Link to={'/home'}>Finstagram</Link></h1>
          <nav className="header-nav">
            <ul>
              <li><Link to={'/home'}>Home</Link></li>
              <li><Link to={`/profile/4`}>Profile</Link></li>
              {innout}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
export default SiteHeader
