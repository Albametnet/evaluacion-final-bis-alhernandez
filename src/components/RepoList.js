import React from 'react';
import { Link } from 'react-router-dom';


class RepoList extends React.Component {
  render() {
    return (
      <ul className="repo__list"> {this.props.allRepos
        .filter(item => {
          return (item.language = this.props.allLanguage);
        })
        .filter(item => {
          return item.name.toLowerCase().includes(this.props.allName);
        })
        .map(item => {
          return (
            <div>
              <li className="repo__list-item">
              <Link to={"/Repo"} >
                  <div className= "repo__list-cover" >
                    <p>PITIFLU</p>
                  </div>
                </Link>
                <div className="repo__card">
                  <h2 className="repo__list-name" ><a href={item.html_url}>{item.name}</a>
                  </h2>
                  <p className="repo__list-description">{item.description}</p>
                  <p className="repo__list-language">
                    <i className="fas fa-circle"></i>  {item.language}
                  </p>
                </div>
              </li>
            </div>
          )
        })}
      </ul>
    );
  }
}

export default RepoList;
