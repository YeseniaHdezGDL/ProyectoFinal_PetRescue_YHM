import React, { Component } from 'react';

// Components
import UpdateUser from '../UpdateUser/UpdateUser';
import { deleteData } from '../../../../../../utils/api';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {

      editing: false,
    }

    this.editUser = this.editUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  editUser() {
    this.setState({editing: true});
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateListUsers();
  }

  deleteUser() {
      deleteData('users', this.props.id).then(this.props.updateListUsers).catch(console.log);
  }

  render() {
    const {id, name, email, userName} = this.props;
    return (
      <>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{userName}</td>
        <UpdateUser show={this.state.editing} hide={this.closeModal} {...this.props} />
      </>
    );
  }
}

export default User;