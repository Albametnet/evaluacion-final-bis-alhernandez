import React from 'react';
import Search from './Search';
import RepoList from './RepoList';


class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <h1 className="App-title">Repos at Adalab on Github</h1>
        </header>
        <main className="home__main">
          <Search 
          myLanguage={this.props.myLanguage} 
          myName={this.props.myName} />
          <RepoList 
          allRepos={this.props.allRepos} 
          allLanguage={this.props.allLanguage} 
          allName={this.props.allName} />
        </main>
      </div>
    );
  }
}

export default Home;