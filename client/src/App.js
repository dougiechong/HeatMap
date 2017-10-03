import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';

var styles = {
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
        <Header/>
        <p className="App-intro" style={styles.appIntro}>
          To get started, log into strava.
        </p>
      </div>
    );
  }
}

export default App;
