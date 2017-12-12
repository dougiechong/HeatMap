import React, {Component} from 'react';
import logo from '../logo.svg';
import axios from 'axios';

var styles = {
    appHeader: {
      color: 'white',
      backgroundColor: '#222',
      height: '150px',
      padding: '20px'
    },
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
  }

  componentDidMount() {
    axios.get('/user')
    .then(res => {
      console.log("mounting");
      console.log(res.data)
      if(res.data.firstname)
        this.setState({name: res.data.firstname});
    });
  }

  render () {
    return (<div className="App-header" style={styles.appHeader}>
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome {this.state.name} to MyHeatMaps</h2>
            </div>
    )
  }
}