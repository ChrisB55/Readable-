import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Welcome the to React Readable</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h4>A Content and Comment Web Application Build With React-Redux </h4>
        </div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand navbar-link" href="#" />
              <button
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav">
                <li role="presentation">
                  <Link to="/"> Main Page</Link>
                </li>
                <li role="presentation">
                  <Link to="/category"> Category View</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
