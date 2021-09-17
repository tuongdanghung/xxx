import React from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Spinner } from 'react-bootstrap/Spinner'
const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
    let body

    if (authLoading) {
        body = (
            <div className="d=flex justify-content-center mt-2">
                <Spinner animation="border" variant="info" />
            </div>
        )
    } else if (isAuthenticated) {
        return <Redirect to="/home" />
    } else {
        body = (
            <>
                {authRoute === 'login' && <Login />}
                {authRoute === 'register' && <Register />}
            </>
        )
    }

    return (
        <div>
            cccc
            {body}
        </div>
    )
}

export default Auth
