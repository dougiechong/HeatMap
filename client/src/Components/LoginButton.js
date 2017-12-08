import React from 'react';

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
    axios.get('/login/strava')
      .then(res => {
        console.log(res.data);
    });
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

