import React from 'react';
import { Link } from 'react-router-dom';


class Repo extends React.Component {
  showCard() {
    const result = this.props.repos;
    console.log(this.props.repos)
    for (let i = 0; i < result.length; i++) {
      if (parseInt(this.props.match.params.id) === result[i].id) {
        return (
          <div>
            <ul className="info_repo--list">
              <li className="card_repo--name">{result[i].name}</li>
              <p className="card_repo--description">{result[i].description}</p>
              <p className="card_repo--language"><i className="fas fa-circle" /> {result[i].language}</p>
              <p><i className="fas fa-star" /> {result[i].stargazers_count}</p>
              <p><i className="fas fa-eye" /> {result[i].watchers_count}</p>
              <p><i className="fas fa-code-branch" /> {result[i].forks_count}</p>
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
        <Link className="return-link" to="/">
          <div>Return</div>
        </Link>
      </div>
    );
  }
}

export default Repo;