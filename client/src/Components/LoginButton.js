import React from 'react';
import axios from 'axios';

require('dotenv').config();

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "https://www.strava.com/oauth/authorize?client_id=20778&response_type=code&redirect_uri=https://stravaheatmaps.herokuapp.com&scope=write&state=mystate&approval_prompt=force"
    };
  }

  componentDidMount() {
    if(process.env.NODE_ENV === "development"){
      this.setState({link :"https://www.strava.com/oauth/authorize?client_id=20778&response_type=code&redirect_uri=http://localhost:3000&scope=write&state=mystate&approval_prompt=force"});
    } 
    //workaround now is just post if the code is there
    if(this.props.code){
      console.log(this.props.code);
      axios.get(`/user/${this.props.code}`)
      .then(res => {
        axios.post(`/login/${this.props.code}`, {
          email: res.data.athlete.email,
          password: 'Flintstone',
          access_token: res.data.access_token,
          id: res.data.athlete.id,
          firstname: res.data.athlete.firstname
        })
        .then(res => {
          //console.log(res.data);
        });
      });
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

