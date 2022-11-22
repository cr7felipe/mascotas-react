import React from "react";
import "./Logi.css"
import Form from 'react-bootstrap/Form';

function Logi() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Control type="password" placeholder="Password" />


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Ingrese informacion relevante sobre la perdida de su mascota que ayude a recuperarla</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Eliga una foto de la mascota</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
        </Form>

    );
}
export default Logi;
