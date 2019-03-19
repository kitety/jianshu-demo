import React, { Component } from 'react';
import {GlobalStyle} from './style';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GlobalStyle/>
        <header className="App-header cell">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
