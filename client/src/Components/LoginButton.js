import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    /*axios.get(`https://www.strava.com/api/v3/athletes/9238844/?access_token=${this.props.uid}`, { 'headers': { 'Authorization': AuthStr } })
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });*/
      /*<button onClick={this.handleClick}>Login</button>
        <h1>{`/r/${this.props.uid}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>*/
  }

  render() {
    return (
      <a href="http://localhost:5000/login/strava">
        <button>
          Login
        </button>
      </a>
    );
  }
}

