import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">     
          <Header />
          <MainPage />
      </div>
    );
  }
}

export default App;
