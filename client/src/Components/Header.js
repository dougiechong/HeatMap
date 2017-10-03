import React, {Component} from 'react';
import logo from '../logo.svg';

var styles = {
    appHeader: {
      color: 'white',
      backgroundColor: '#222',
      height: '150px',
      padding: '20px'
    },
};

export default class Header extends Component {
  render () {
    return (<div className="App-header" style={styles.appHeader}>
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to MyHeatMaps</h2>
            </div>
    )
  }
}