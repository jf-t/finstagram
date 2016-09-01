import React from 'react';
import {Link} from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""}
    this.searchQuery = this.searchQuery.bind(this);
  }

  searchQuery(e) {
    this.props.requestUsers(e.target.value);
  }

  render() {
    let searchItems = ""
    if (this.props.search.length > 0) {
      searchItems = this.props.search.map(user => {
        return <li key={user.id}><Link to={`/profile/${user.id}`}>
          <span className="search-fullname">{user.full_name}</span>
          <span className="search-username">{user.username}</span>
        </Link></li>
      })
    }
    return(
      <div className="search-bar">
        <input type="text" onChange={this.searchQuery} />
        <div className="search-results">
          <ul>
            {searchItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default Search;
