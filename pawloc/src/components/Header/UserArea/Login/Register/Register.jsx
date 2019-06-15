import React, {Component} from 'react'; 

//components
import User from './User/User';
import CreateUser from './CreateUser/CreateUser';

//actions
import { getData } from '../../../../../utils/api';
import Button from 'react-bootstrap/Button';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            creating: false
        }
        this.updateListUsers = this.updateListUsers.bind(this);
        this.createUser = this.createUser.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        getData('users').then((users) => this.setState({users}));
    }
    updateListUsers() {
        getData('users').then((users) => this.setState({users}));
    }
    createUser() {
        this.setState({creating: true});
    }
    closeModal() {
        this.setState({creating: false});
        this.updateListUsers();
    }
    renderUsers() {
        return this.state.users.map((user, i) => (
            <User
                key={`user-${i}`}
                updateListUsers={this.updateListUsers}
                {...user}
            />
        ));
    }
    render(){
        return (
            <>
                <CreateUser show={this.state.creating} hide={this.closeModal} />

                
   
            </>
        )
    }
}

export default Register;
