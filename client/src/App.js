import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Initialize state
  state = { password: "yo" }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getString();
  }

  getString = () => {
    // Get the passwords and store them in state
    fetch('/api/string')
      .then(res => res.json())
      .then(password => this.setState({password}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyHeatMaps</h2>
        </div>
        <p className="App-intro">
          To get started, log into strava.
        </p>
      </div>
    );
  }
}

export default App;
