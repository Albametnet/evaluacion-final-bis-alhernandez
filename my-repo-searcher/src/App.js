import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
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
      .then(function (response) {
        return response.json();
      })
      
      .then((json) => {
        const repositories = json;
        this.setState({
          repos: repositories
        })
      })

      // let hola = (this.state.repos.language)
      // if (hola === "HTML") {
      //   hola.addClassName('html-orange')
      //   }
      //   else if (hola ==="CSS"){
      //     hola.addClassName ('.css-blue')
      //   }
      //   else if (hola === "JavaScript"){
      //     hola.addClassName ('.javascript-yellow')
      //   }
      //   else {hola.addClassName ('.shell-purple')}
      }
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1 className="App-title">Repos at Adalab on Github</h1>
        </header>
        <input className="filter__input" type="text"  />
        <select name="" id="">
        <option value="">Lenguage</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Shell">Shell</option>
        </select>
        <ul className="repo__list"> {this.state.repos.map(item => {
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
