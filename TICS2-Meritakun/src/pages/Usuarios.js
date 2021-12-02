import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import axios from 'axios';

export class Usuarios extends Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            usuarios: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/user')
            .then(res => {
                if(res.data.length > 0) {
                    this.setState({ usuarios: res.data })
                    // this.setState({ usuarios: res.data.map(user => { return {
                    //     nombre: user.nombre,
                    //     username: user.username,
                    //     email: user.email,
                    //     tipo: user.tipo
                    // }}) })
                }
            }).then(() => console.log(this.state.usuarios));
        // console.log(this.state.usuarios);
    }

    render() {

        return (
            <div>
                <h3>Lista de usuarios en la base de datos wooooo yeeeeee saun saun macarraun auuuu</h3>
                <div className='contenido'>
                    <Button onClick={() => window.location='/crearUsuario'} variant="primary">+ Añadir usuario</Button>{' '}
                    <br />
                    {this.state.usuarios.map(function(user) {
                        return(
                            <div>
                                <p>{user.nombre}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Usuarios;
