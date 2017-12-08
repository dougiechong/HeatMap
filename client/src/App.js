import React, { Component } from 'react';
import Header from './Components/Header';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import ShowButton from './Components/ShowButton';
import Main from './Components/Main';
import FetchDemo from './Components/FetchDemo';
import './App.css';

//nothing
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
          To get started, logfafd intoD?F?S?D strava.
        </p>
        <LoginButton uid="482c702cfe2d9ae5f84309aa1b6f416bb17720da" subreddit="popular"/>
        <LogoutButton/>
        <ShowButton/>
      </div>
    );
  }
}

export default App;
