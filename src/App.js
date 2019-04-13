import React, { Component } from "react";
import Header from "./common/header";
import { GlobalStyle } from "./statics/iconfont/iconfont";
import { BasicGlobalStyle } from "./style";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Details from "./pages/details/loadable";

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BasicGlobalStyle />
        <GlobalStyle />
        <div className="App">
          <BrowserRouter>
            <Header />
            <Route path="/" component={Home} exact={true} />
            <Route path="/detail/:id" exact={true} component={Details} />
            <Route path="/login" exact={true} component={Login} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
