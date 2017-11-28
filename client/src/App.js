import React, { Component } from 'react';
import Header from './Components/Header';
import FetchDemo from './Components/FetchDemo';
import LoginButton from './Components/LoginButton';
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
        <FetchDemo subreddit="reactjs"/>
        <LoginButton uid="482c702cfe2d9ae5f84309aa1b6f416bb17720da "/>
      </div>
    );
  }
}

export default App;
