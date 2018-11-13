import React, { Component } from 'react';
import { getUser } from '../services/userService';

class User extends Component {
  state = {
    data: { id: '', name: '', surname: '', age: '', isActive: '' }
  };

  populateUser() {
    const userId = Number(this.props.match.params.id);
    const user = getUser(userId);
    this.setState({ data: this.mapToViewModel(user) });
  }

  mapToViewModel(user) {
    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      age: user.age,
      isActive: user.isActive
    };
  }

  componentDidMount() {
    this.populateUser();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="card m-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="font-weight-bold mr-3">ID:</span>
            {data.id}
          </li>
          <li className="list-group-item">
            <span className="font-weight-bold mr-3">Name:</span>
            {data.name}
          </li>
          <li className="list-group-item">
            <span className="font-weight-bold mr-3">Surname:</span>
            {data.surname}
          </li>
          <li className="list-group-item">
            <span className="font-weight-bold mr-3">Age:</span>
            {data.age}
          </li>
        </ul>
      </div>
    );
  }
}

export default User;
