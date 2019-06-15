import React, { Component } from 'react';

//Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';

class UserForm extends Component {
   constructor(props) {
       super(props);
       this.state = {
           name: props.data.name || '',
           email: props.data.email || '',
           userName: props.data.userName || '',
       };
       this.updateName = this.updateName.bind(this);
       this.updateEmail = this.updateEmail.bind(this);
       this.updateUserName = this.updateUserName.bind(this);
   }

   updateName({ target }) {
       this.setState({ name: target.value });
   }
   updateEmail({ target }) {
       this.setState({ email: target.value });
   }
   updateUserName({ target }) {
       this.setState({ userName: target.value });
   }
   
   render() {
       return (
           <Form>
               <Form.Group>
                   <Form.Label>Nombre:</Form.Label>
                   <Form.Control
                       type="text"
                       placeholder="Tu nombre y apellido"
                       value={this.state.name}
                       onChange={this.updateName}
                   />
                   <Form.Label>Correo electrónico:</Form.Label>
                   <Form.Control
                       type="text"
                       value={this.state.email}
                       onChange={this.updateEmail}
                   />
                   <Form.Label>Nombre de usuario:</Form.Label>
                   <Form.Control
                       type="text"
                       value={this.state.userName}
                       onChange={this.updateUserName}
                   />
                   <Link to="/dashboard">
                        <Button variant="primary" onClick={() => this.props.submit({ ...this.state })}>Guardar</Button>
                   </Link>
               </Form.Group>
           </Form>
       );
   }
}

export default UserForm;