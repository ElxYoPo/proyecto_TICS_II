import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';

export class CrearUsuario extends Component {
    constructor(props) {
        super(props);

        this.nombreCambio = this.nombreCambio.bind(this);
        this.usernameCambio = this.usernameCambio.bind(this);
        this.passwordCambio = this.passwordCambio.bind(this);
        this.emailCambio = this.emailCambio.bind(this);
        this.tipoCambio = this.tipoCambio.bind(this);
        this.addUsuario = this.addUsuario.bind(this);

        this.state = {
            nombre: '',
            username: '',
            password: '',
            email: '',
            tipo: ''
        }
    }

    componentDidMount() {
        console.log('algo jaja ola mera');
    }

    nombreCambio(a) {
        this.setState({...this.state, nombre: a.target.value});
    }
    usernameCambio(a) {
        this.setState({...this.state, username: a.target.value});
    }
    passwordCambio(a) {
        this.setState({...this.state, password: a.target.value});
    }
    emailCambio(a) {
        this.setState({...this.state, email: a.target.value});
    }
    tipoCambio(a) {
        this.setState({...this.state, tipo: a.target.value});
    }

    addUsuario(a) {
        a.preventDefault();

        const user = this.state;
        console.log(user);

        axios.post('http://localhost:3001/user/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log("Error: " + err));


        window.location = '/usuarios';
    }

    render() {
        return (
            <div>
                <h3>Crear usuario q fomeee</h3>
                <div className='contenido'>
                    <form onSubmit = {this.addUsuario} style={{maxWidth: '50%'}} >
                        <div className="form-group">
                            <label>Nombre: </label>
                            <input type="text" className="form-control" required value={this.state.nombre} onChange={this.nombreCambio}></input>
                            <label>N. de usuario: </label>
                            <input type="text" className="form-control" required value={this.state.username} onChange={this.usernameCambio}></input>
                            <label>Contraseña: </label>
                            <input type="password" className="form-control" required value={this.state.password} onChange={this.passwordCambio}></input>
                            <label>Correo electrónico: </label>
                            <input type="text" className="form-control" required value={this.state.email} onChange={this.emailCambio}></input>
                            <label>Tipo de usuario: </label>
                            <select className="form-control" value={this.state.tipo} onChange={this.tipoCambio}>
                                <option key="admin" value="admin">Administrador</option>
                                <option key="secre" value="secre">Secretari@ creo que le pusimos no recuerdo si lo cambiamos exdi</option>
                                <option key="opera" value="opera">Operario@ creo que le pusimos no recuerdo si lo cambiamos exdi</option>
                                <option key="" value="">Indefinido jeje pero se guarda como secre SE SUPONE PORQUE ASÍ LO DEFINÍ EN EL BACKEND</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Button variant="success" onClick={this.addUsuario}>+ Añadir usuario</Button>{' '}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CrearUsuario;
