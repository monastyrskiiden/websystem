import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: { email: '', password: '' },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label('Email'),
    password: Joi.string()
      .min(6)
      .required()
      .label('Password')
  };

  doSubmit = () => {
    const { data } = this.state;
    let userData = JSON.parse(localStorage.getItem('registered'));

    if (data.email === userData.email && data.password === userData.password) {
      localStorage.setItem('auth', 'true');
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } else {
      const errors = { ...this.state.errors };
      errors.email = 'Wrong email or password ';
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
