import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
      <Switch>
      <Route path="/" component={businessform} exact />
      </Switch>
      </main>
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />


      <p>
      Welcome to Summation
      <p>
      I am a...
      </p>
      </p>
      <buttonGroup variant="text" color="primary" aria-label="text primary button group">
      <button>Business</button>
      <button>Charity</button>
      </buttonGroup>
      </header>
      </div>
      );
    }
  }

  export default App;
