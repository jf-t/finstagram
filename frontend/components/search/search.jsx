import React from 'react';
import {Link} from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchQuery = this.searchQuery.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  searchQuery(e) {
    this.props.requestUsers(e.target.value);
  }

  resetInput() {
    let e = {target:{value:""}}
    this.searchQuery(e)
  };

  render() {
    let searchItems = ""
    if (this.props.search.length > 0) {
      searchItems = this.props.search.map(user => {
        return <li key={user.id}><Link to={`/profile/${user.id}`}>
          <div className="search-profile-pic">
            <img src={user.image_url} />
          </div>
          <span>{user.full_name}</span>
          <span className="follow-username">@{user.username}</span>
        </Link></li>
      })
    }
    return(
      <div className="search-bar">
        <i className="fa fa-search"></i>
        <input id="search-input" type="text" onChange={this.searchQuery} placeholder="Search by user..."/>
        <div className="search-results">
          <ul>
            {searchItems}
          </ul>
        </div>
        <span onClick={this.resetInput} className="close-search">X</span>
      </div>
    )
  }
}

export default Search;
