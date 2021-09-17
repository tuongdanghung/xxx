import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import AlertMessage from '../layout/AlertMessage';
const Register = () => {

    const { registerUser } = useContext(AuthContext)
    const [registerForm, setRegister] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })
    // 
    const [alert, setAlert] = useState(null)
    // 
    const { username, password, confirmPassword } = registerForm
    // 
    const onchangeRegister = e => setRegister({ ...registerForm, [e.target.name]: e.target.value })
    // 
    const register = async e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setAlert({ type: 'danger', message: 'password với confirmPassword không giống nhau kìa' })
            setTimeout(() => setAlert(null), 3000)
            return
        }


        try {
            const registerData = await registerUser(registerForm)
            if (registerData.success) {
                History.push('/home')
            } else {
                setAlert({ type: 'danger', message: registerData.message })
                setTimeout(() => setAlert(null), 3000);
            }
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <>
            <AlertMessage info={alert} />
            <Form onSubmit={register}>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="userName"
                        name='username'
                        value={username}
                        onChange={onchangeRegister}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        name='password'
                        value={password}
                        onChange={onchangeRegister} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reset Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={onchangeRegister}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>
                <Link to="/login">Login</Link>
            </p>
        </>
    )
}

export default Register
