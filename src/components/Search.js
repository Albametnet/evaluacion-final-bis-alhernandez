import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <select name="" id="" onChange={this.props.myLanguage}>
          <option value="">Lenguage</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Shell">Shell</option>
        </select>
        <input className="filter__input" type="text" onChange={this.props.myName} />
      </div>
    );
  }
}

export default Search;


