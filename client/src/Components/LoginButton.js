import React from 'react';
import { Link } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
require('dotenv').config();

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "http://www.stravaheatmaps.herokuapp.com/login/strava"
    };
  }

  componentDidMount() {
    if(process.env.NODE_ENV === "development"){
      this.setState({link :"http://localhost:5000/login/strava"});
    } 
  }

  render() {
    return (
      <a className = "Login-button" href={this.state.link}>
        <button>
          Login
        </button>
      </a>
    );
  }
}

