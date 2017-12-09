import React, { Component } from 'react';
import Header from './Components/Header';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import ShowButton from './Components/ShowButton';
import Main from './Components/Main';
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
        <Main/>
      </div>
    );
  }
}

export default App;
