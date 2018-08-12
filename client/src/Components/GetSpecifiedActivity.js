import React from 'react';
import axios from 'axios';

export default class GetSpecifiedActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {segment_efforts: []};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  //hopefully update?
  handleClick() {
    axios.get('/user')
      .then(res => {
        console.log(res.data);

        // need to hide and get this bearer token somehow
        axios.get(`https://www.strava.com/api/v3/activities/1249623702`, { 'headers': { 'Authorization': 'Bearer 482c702cfe2d9ae5f84309aa1b6f416bb17720da'} })
          .then(res => {
            console.log(res.data);
            console.log(res.data.segment_efforts);
            const segment_efforts = res.data.segment_efforts;
            this.setState({segment_efforts : segment_efforts});
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Show Specifics</button>
        <div>
            {JSON.stringify(this.state.segment_efforts)}
        </div>
      </div>
    );
  }
}

