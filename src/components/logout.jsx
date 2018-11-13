import { Component } from 'react';

class Logout extends Component {
  componentDidMount() {
    localStorage.setItem('auth', '');
    window.location = '/';
  }

  render() {
    return null;
  }
}

export default Logout;
