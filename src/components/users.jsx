import React, { Component } from 'react';
import UsersTable from './usersTable';
import SearchBox from './searchBox';
import _ from 'lodash';

class Users extends Component {
  state = {
    users: [],
    searchQuery: '',
    sortColumn: { path: 'id', order: 'asc' }
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { users } = this.props;
    const { sortColumn, searchQuery } = this.state;

    let filtered = users;
    if (searchQuery) {
      filtered = users.filter(
        user =>
          user.id.toString().startsWith(searchQuery.toLowerCase()) ||
          user.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          user.surname.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          user.age.toString().startsWith(searchQuery.toLowerCase())
      );
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    return { totalCount: sorted.length, data: sorted };
  };

  render() {
    const { sortColumn, searchQuery } = this.state;
    const { totalCount, data: users } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          {totalCount > 0 && this.state.searchQuery !== '' ? (
            <p>Search count: {totalCount} in the database</p>
          ) : (
            <p />
          )}
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <UsersTable
            users={users}
            sortColumn={sortColumn}
            onActive={this.props.onActive}
            onSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}

export default Users;
