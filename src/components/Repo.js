import React from 'react';
import '../stylesheets/Repo.css';
import { Link } from 'react-router-dom';


class Repo extends React.Component {
  showCard() {
    const result = this.props.repos;
    console.log(this.props.repos)
    for (let i = 0; i < result.length; i++) {
      if (parseInt(this.props.match.params.id) === result[i].id) {
        return (
          <div>
            <ul className="info__repo-card">
              <li className="card__repo-list"></li>
              <h2 className="card__repo-name">{result[i].name}</h2>
              <h3 className="card__repo-description">{result[i].description}</h3>
              <p className="card__repo-language"><i className="fas fa-circle" /> {result[i].language}</p>
              <p><i className="fas fa-star" /> {result[i].stargazers_count}</p>
              <p><i className="fas fa-eye" /> {result[i].watchers_count}</p>
              <p><i className="fas fa-code-branch" /> {result[i].forks_count}</p>
              <Link className="return__link" to="/">
                <div className="return__button">Return</div>
              </Link>
            </ul>
          </div>
        );
      }
    }
  }
  render() {
    return (
      <div className="repo__card-info">
        {this.showCard()}

      </div>
    );
  }
}

export default Repo;