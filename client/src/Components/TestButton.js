import React from 'react';
import axios from 'axios';

export default class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowOn: true, activities: []};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  //hopefully update?
  handleClick() {
    this.setState(prevState => ({
      isShowOn: !prevState.isShowOn
    }));
    if(this.state.isShowOn){
      axios.get('/login/fail')
        .then(res => {
          console.log('hii');
          console.log(res.data);
      });
    } else {
      this.setState({activities : []})
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isShowOn ? 'TestButton' : 'TestButton'}
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

