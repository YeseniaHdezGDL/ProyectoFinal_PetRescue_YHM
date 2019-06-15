import React, { Component } from 'react';

// Actions
import { deleteData } from '../../../utils/api';

// Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import UserForm from './UserForm/UserForm';

class DeleteUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };

    this.showError = this.showError.bind(this);
    this.update = this.update.bind(this);
  }

  showError() {
    this.setState({error: true});
  }

  delete(data) {
    deleteData('users', this.props.id, data).then(this.props.hide).catch(this.showError);
  }

  render() {
    const {name, email, userName} = this.props;
    const alert = this.state.error && (<Alert variant="danger">Algo salió mal</Alert>);
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ItemForm submit={this.update} data={{name, email, userName}} />
        </Modal.Body>
        {alert}
      </Modal>
    );
  }
}

export default DeleteUser;