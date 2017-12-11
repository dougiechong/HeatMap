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
    /*axios.post('/login', {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
    if(process.env.NODE_ENV == "development"){
      this.setState({link :"https://www.strava.com/oauth/authorize?client_id=20778&response_type=code&redirect_uri=http://localhost:3000&scope=write&state=mystate&approval_prompt=force"});
    } 
    //workaround now is just post if the code is there
    if(this.props.code){
      console.log(this.props.code);
      axios.get(`/user/${this.props.code}`)
      .then(res => {
        console.log(res.data);
        console.log(res.data.access_token);
        console.log(res.data.athlete.email);
        axios.post(`/login/${this.props.code}`, {
          email: res.data.athlete.email,
          password: 'Flintstone',
          access_token: res.data.access_token,
          id: res.data.athlete.id
        })
        .then(res => {
          console.log(res.data);
          /*console.log(res.data.access_token);
          console.log(res.data.athlete.id);
          console.log(res.data);
          axios.get(`https://www.strava.com/api/v3/athletes/${res.data.athlete.id}/activities`, { 'headers': { 'Authorization': `Bearer ${res.data.access_token}`} })
            .then(res => {
              console.log(res.data);
              const activities = res.data.map(obj => obj.id);
              console.log(activities);
              //this.setState({activities : activities});
              //console.log(this.state.activities);
          });*/
        });
      });
      //post to get access token
      /*axios.post('https://www.strava.com/oauth/token', {
        client_id: '20778',
        client_secret: '50d5225f56f83566b20d7bbae9e10cc4ccc59b56',
        code: this.props.code
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data)
        console.log(response.data.access_token)
      })
      .catch(function (error) {
        console.log(error);
      });*/
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

