import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var styles = {
    appHeader: {
      color: 'white',
      backgroundColor: '#222',
      height: '150px',
      padding: '20px'
    },

    appIntro: {
      fontSize: 'large'
    },

    app: {
      textAlign: 'center'
    }
};

class App extends Component {

  // Initialize state
  /*state = { password: "yo" }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getString();
  }

  getString = () => {
    // Get the passwords and store them in state
    fetch('/api/string')
      .then(res => res.json())
      .then(password => this.setState({password}));
  }*/

  render() {
    return (
      <div className="App" style={styles.app}>
        <div className="App-header" style={styles.appHeader}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyHeatMaps</h2>
        </div>
        <p className="App-intro" style={styles.appIntro}>
          To get started, log into strava.
        </p>
      </div>
    );
  }
}

export default App;
