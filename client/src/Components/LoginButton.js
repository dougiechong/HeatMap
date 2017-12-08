import React from 'react';
import axios from 'axios';

require('dotenv').config();

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "https://stravaheatmaps.herokuapp.com/login/strava"
    };
  }

  componentDidMount() {
    if(process.env.NODE_ENV === "development"){
      this.setState({link :"http://localhost:5000/login/strava"});
    } 
  }

  render() {
    return (
      <a className = "Login-button" href={"https://www.strava.com/oauth/authorize?client_id=20778&response_type=code&redirect_uri=http://localhost:3000&scope=write&state=mystate&approval_prompt=force"}>
        <button>
          Login
        </button>
      </a>
    );
  }
}

