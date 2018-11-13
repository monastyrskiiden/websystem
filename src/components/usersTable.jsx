import React, { Component } from 'react';
import Checkbox from './common/checkbox';
import Table from './common/table';
import Link from 'react-router-dom/Link';

class UsersTable extends Component {
  columns = [
    {
      path: 'id',
      label: 'ID'
    },
    {
      path: 'name',
      label: 'Name',
      content: user => <Link to={`/users/${user.id}`}>{user.name}</Link>
    },
    { path: 'surname', label: 'Surname' },
    { path: 'age', label: 'Age' },
    {
      key: 'check',
      content: user => (
        <Checkbox
          onChange={() => this.props.onActive(user)}
          checked={user.isActive}
        />
      )
    }
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default UsersTable;
