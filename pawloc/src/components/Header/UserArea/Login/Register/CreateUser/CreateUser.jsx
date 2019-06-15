import React, { Component } from 'react';

//actions
import { postData } from '../../../../../../utils/api';

//components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

import UserForm from '../UserForm/UserForm';

class CreateUser extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        userName: '',
        error: false,
    };

    this.create = this.create.bind(this);
}

showError() {
    this.setState({error: true})
}

create(data) {
    postData('users', data).then(this.props.hide).catch(this.showError);
}

render() {
    const alert = this.state.error && (<Alert variant="danger">Algo salió mal</Alert>);
    return (
        <>
        <Form show={this.props.show} onHide={this.props.hide}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UserForm submit={this.create} data={{}} />
            </Modal.Body>

            {alert}
        </Form>
        </>
        )
    }
}

export default CreateUser;