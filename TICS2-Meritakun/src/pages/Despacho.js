import React from 'react'
import './despacho.css'
import {Form,Row,Col} from 'react-bootstrap';

function despacho() {
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



export default despacho
