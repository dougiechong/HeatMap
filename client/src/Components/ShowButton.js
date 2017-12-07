import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default class ShowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowOn: true, activities: []};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isShowOn: !prevState.isShowOn
    }));
    if(this.state.isShowOn){
      axios.get('/user')
        .then(res => {
          console.log(res.data);
          console.log(res.data.id);
          axios.get(`https://www.strava.com/api/v3/athletes/${res.data.id}/activities`, { 'headers': { 'Authorization': 'Bearer 482c702cfe2d9ae5f84309aa1b6f416bb17720da'} })
            .then(res => {
              console.log(res.data);
              const activities = res.data.map(obj => obj.id);
              console.log(activities);
              this.setState({activities : activities});
              console.log(this.state.activities);
          });
        });
    } else {
      this.setState({activities : []})
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isShowOn ? 'Show Activities' : 'Remove Activities'}
        </button>
        <div>
          <ul>
            {this.state.activities.map(activity =>
              <li key={activity}>{activity}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

