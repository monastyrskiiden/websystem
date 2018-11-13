import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import ActiveUsers from './components/activeUsers';
import Users from './components/users';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import User from './components/user';
import { getUsers } from './services/userService';
import RegisterForm from './components/registerForm';
import './App.css';

class App extends Component {
  state = {
    users: [],
    isAuth: ''
  };

  componentDidMount() {
    const users = getUsers();
    const isAuth = localStorage.getItem('auth');
    this.setState({ users, isAuth });
  }

  handleActive = user => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...users[index] };
    users[index].isActive = !users[index].isActive;
    this.setState({ users });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.isAuth} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/users/active"
              exact
              render={props => (
                <ActiveUsers {...props} users={this.state.users} />
              )}
            />
            <Route path="/users/:id" component={User} />
            <Route
              path="/users" exact
              render={props => (
                <Users
                  {...props}
                  onActive={this.handleActive}
                  users={this.state.users}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/users" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
