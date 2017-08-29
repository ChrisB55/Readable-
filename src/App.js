import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Category from "./components/Category";
import CreateNew from "./components/CreateNew";

import { BrowserRouter as Router, Route,} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/category" component={Category} />
        <Route path="/create" component={CreateNew} />
      </div>
    );
  }
}

export default App;
