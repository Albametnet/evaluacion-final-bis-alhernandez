import React, { Component } from 'react';
import './App.css';

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
            language: ''
        }
    }
    componentDidMount() {
        this.getRepos();
    }
    getRepos() {
        fetch(
            'https://api.github.com/orgs/Adalab/repos'
        )
            .then(function(response) {
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
                <header className="App-header">
                    <h1 className="App-title">Repos at Adalab on Github</h1>
                </header>
                <select name="" id="" onChange = {this.filterLanguage}>
                    <option value="">Lenguage</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Shell">Shell</option>
                </select>
                <input className="filter__input" type="text" onChange = {this.filterName}/>
                
                <ul className="repo__list"> {this.state.repos
                .filter (item => {
                  return (item.language = this.state.language);
                })
                .filter(item => {
                  return item.name.toLowerCase().includes(this.state.name);
                })
                    .map(item => {
                        return (
                            <div>
                                <li className="repo__list-item">
                                    <div className="repo__card">
                                        <h2 className="repo__list-name" ><a href={item.html_url}>{item.name}</a></h2>
                                        <p className="repo__list-description">{item.description}</p>
                                        <p className="repo__list-language"><i className="fas fa-circle"></i>  {item.language}</p>
                                    </div>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
