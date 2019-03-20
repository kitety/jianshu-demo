import React, {Component} from 'react';
import Header from './common/header'
import { GlobalStyle } from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
        <div className="App">
          <GlobalStyle/>
          <Header/>
        </div>
    );
  }
}

export default App;
