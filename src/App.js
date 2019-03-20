import React, { Component } from "react";
import Header from "./common/header";
import { GlobalStyle } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
