import React from 'react'
import './despacho.css'
import {Form,Row,Col} from 'react-bootstrap';

export class Despacho extends Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            despacho: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/despacho')
            .then(res => {
                if(res.data.length > 0) {
                    this.setState({ despacho: res.data })
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
            <div className='despacho'>
                <Form className="formulario">
                    <Row>
                        <Col xs={7}>
                            <Form.Control placeholder="City" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="State" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Zip" />
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }

    
}



export default Despacho;
