import React, {Component} from 'react'
import logo from '../logo.svg';

class Header extends Component {
    render () {
        return (
            <div>
            <div className="header">
              <h1>Welcome the to React Readable</h1>
              <img src={logo} className="App-logo" alt="logo" />
              <h4>A Content and Comment Web Application Build With React-Redux </h4>
            </div>
            <nav className="navbar navbar-default">
              <div className="container">
                  <div className="navbar-header"><a class="navbar-brand navbar-link" href="#"></a>
                      <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                  </div>
                  <div className="collapse navbar-collapse" id="navcol-1">
                      <ul className="nav navbar-nav">
                          <li role="presentation">
                              <a href="#"> Link 1 </a>
                          </li>
                          <li role="presentation">
                              <a href="#">Link 2 </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          </div>
        )
    }
}

export default Header