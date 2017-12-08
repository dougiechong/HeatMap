import React from 'react';

export default class LogoutButton extends React.Component {
  render() {
    return (
      <a href="http://localhost:5000/logout">
        <button>
          Logout
        </button>
      </a>
    );
  }
}
