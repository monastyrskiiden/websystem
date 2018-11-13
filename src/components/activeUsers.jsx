import React, { Component } from 'react';
import Table from './common/table';
import Link from 'react-router-dom/Link';
import _ from 'lodash';

class AciveUsers extends Component {
  state = {
    sortColumn: { path: 'name', order: 'asc' }
  };

  columns = [
    { path: 'id', label: 'ID' },
    {
      path: 'name',
      label: 'Name',
      content: user => <Link to={`/users/${user.id}`}>{user.name}</Link>
    },
    { path: 'surname', label: 'Surname' },
    { path: 'age', label: 'Age' }
  ];

  getActiveUsers = () => {
    const { users } = this.props;
    return users.filter(u => u.isActive);
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getSortedData = () => {
    const users = this.getActiveUsers();
    const { sortColumn } = this.state;

    if (sortColumn.path === 'name' || sortColumn.path === 'surname') {
      const sorted = _.orderBy(users, [sortColumn.path], [sortColumn.order]);
      return { users: sorted };
    }

    return { users };
  };

  render() {
    const { users } = this.getSortedData();
    return (
      <Table
        columns={this.columns}
        data={users}
        onSort={this.handleSort}
        sortColumn={this.state.sortColumn}
      />
    );
  }
}

export default AciveUsers;
