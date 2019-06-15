import React from 'react';

const Dashboard = () => (
    <div>
        <h1>Aquí editas tu perfil y registras a tus mascotas</h1>
    </div>
)

export default Dashboard;

/*
import React, { Component } from 'react';

import Item from './Item'//CORREGIR ESTA RUTA
import CreateItem from './Crea' //CORREGIR ESTA RUTA

import { getData } from '../../utils/api';
import Button from 'react-bootstrap/Button';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            creating: false
        }
        this.updateDash = this.updateDash.bind(this);
        this.createItem = this.createItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        getData('items').then((items) => this.setState({items}));
    }
    updateDash() {
        getData('items').then((items) => this.setState({items}));
    }
    createItem() {
        this.setState({creating: true});
    }
    closeModal() {
        this.setState({creating: false});
        this.updateDash();
    }
    renderItems() {
        return this.state.items.map((item, i) => (
            <Item
                key={`item-${i}`}
                updateDash={this.updateDash}
                {...item}
            />
        ));
    }
    render() {
        return (
            <>
                <CreateItem show={this.state.creating} hide={this.closeModal} />
                <Button variant="primary" onClick={this.createItem}>Añadir tus datos</Button>
            </>
        )
    }
}
*/
