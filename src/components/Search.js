import React from 'react';
import '../stylesheets/Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input className="filter__input" type="text" placeholder="Search" onChange={this.props.myName} />
        <select className="filter__select" name="" id="" onChange={this.props.myLanguage}>
          <option value="">Lenguage</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Shell">Shell</option>
        </select>
      </div>
    );
  }
}

export default Search;


