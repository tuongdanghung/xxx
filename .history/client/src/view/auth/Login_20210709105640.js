import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="userName" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>
                <Link to="/register">register</Link>
            </p>
        </>
    )
}

export default Login
