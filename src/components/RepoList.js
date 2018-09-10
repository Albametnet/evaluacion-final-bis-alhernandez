import React from 'react';
import '../stylesheets/RepoList.css';
import { Link } from 'react-router-dom';


class RepoList extends React.Component {
  render() {
    return (
      <ul className="repo__list"> {this.props.allRepos
        .filter(item => {
          return (item.language === this.props.allLanguage);
        })
        .filter(item => {
          return item.name.toLowerCase().includes(this.props.allName);
        })
        .map(item => {
          return (
            <div className="repo__list-container">
              <li className="repo__list-item">
                <div className="repo__card">
                  <h2 className="repo__list-name" ><a href={item.html_url}>{item.name}</a>
                  </h2>
                  <Link className="card__link" to={`/repo/${item.id}`}>
                    <p className="repo__list-description">{item.description}</p>
                    <p className="repo__list-language">
                      <i className="fas fa-circle"></i>  {item.language}
                    </p>
                  </Link>
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
