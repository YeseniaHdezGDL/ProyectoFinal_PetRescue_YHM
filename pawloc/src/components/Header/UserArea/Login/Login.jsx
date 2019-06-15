/*TEMPORAL
import React from 'react';

const Login = () => (
  <div>
    Aquí ingresas nombre y contraseña para ingresar.
  </div>
);
*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/';
import * as Yup from 'yup'; //validación

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Link from 'react-router-dom/Link';

//actions
import { getDataWithQuery } from '../../../../utils/api'; //variante al data para recibir query
import storage from '../../../../utils/storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false,
      loggedIn: false,
      usernameValid: true,//validacion
      passwordValid: true,//validacion
    }

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  updateUsername({target}) {
    this.setState({username: target.value, loginError: false});
  }

  updatePassword({target}) {
    this.setState({password: target.value, loginError: false});
  }

  checkUser(userData) {
    if (userData && userData.length) {
      storage.store('user', userData[0]);
      this.setState({loggedIn: true});
    } else {
      this.setState({loginError: true});
    }
  }

  logIn() {//validación
    const usernameValidation = Yup.string().required().isValid(this.state.username);
    const passwordValidation = Yup.string().required().isValid(this.state.password);
    Promise.all([usernameValidation, passwordValidation])
      .then(([usernameValid, passwordValid]) =>{
        this.setState({usernameValid, passwordValid});
        if (usernameValid && passwordValid) {
          getDataWithQuery('users', {...this.state}).then(this.checkUser);
        }
      });
  } //después cambiar (path, queryObject,) el orden (antes estaba query primero) en getDataWithQuery del api.js

  render() {
    let alert = null;
    if (this.state.loggedIn) {
      return (<Redirect to="/dashboard" />);
    }
    if (this.state.loginError) {
      alert = (<Alert variant="danger">¡Revisa tu usuario y contraseña!</Alert>);
    }
    return (

      <>

        <Form.Group controlId="formUsername">
          <Form.Label>Usuario:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Tu nombre de usuario"
            value={this.state.username}
            onChange={this.updateUsername}
            isInvalid={!this.state.usernameValid} //VALIDACIÓN           
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Tu contraseña"
            value={this.state.password}
            onChange={this.updatePassword}
            isInvalid={!this.state.passwordValid}//VALIDACIÓN
          />
        </Form.Group>

        <Button variant="primary" onClick={this.logIn}>
          Entrar
        </Button>

        {alert}

        <br/>

        <Link to="/register">
          <Button variant="dark" onClick={this.createUser}>¿Eres nuevo?</Button>
        </Link>

      </>
    );
  }
}

export default Login;