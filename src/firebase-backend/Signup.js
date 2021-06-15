import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';


function Signup() {
    const emailRef = useRef();

    return(
        <div className="Signup">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
            </div>
        </div>
    );
}


export default Signup;