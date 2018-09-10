import React, { Component } from 'react';
import Home from './components/Home';
import Repo from './components/Repo';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterName = this.filterName.bind(this);
    this.filterLanguage = this.filterLanguage.bind(this);
    this.state = {
      repos: [],
      name: '',
      html_url: '',
      description: '',
      language: '',
      stargazers_count: 0,
      watchers_count: 0,
      forks: 0
    }
  }
  componentDidMount() {
    this.getRepos();
  }
  getRepos() {
    fetch(
      'https://api.github.com/orgs/Adalab/repos'
    )
      .then(function (response) {
        return response.json();
      })

      .then((json) => {
        const repositories = json;
        this.setState({
          repos: repositories
        })
      });
  }
  filterName(e) {
    const myrepo = e.currentTarget.value.toLowerCase();
    this.setState({
      name: myrepo
    });
  }
  filterLanguage(e) {
    const mylang = e.currentTarget.value;
    this.setState({
      language: mylang
    });
  }

  render() {
    return (
      <div className="App">
        <main className="App__main">
          <Switch>
            <Route exact path="/" render={() => <Home
              myLanguage={this.filterLanguage}
              myName={this.filterName}
              allRepos={this.state.repos}
              allLanguage={this.state.language}
              allName={this.state.name} />} />
            <Route path="/repo/:id" render={props => <Repo
              match={props.match}
              repos={this.state.repos} />} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
