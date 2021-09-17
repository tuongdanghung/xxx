import React from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
const Auth = ({ authRoute }) => {
    let body

    body = (
        <>
            {authRoute === 'login' && <Login />}
            {authRoute === 'register' && <Register />}
        </>
    )
    return (
        <div>
            cccc
            {body}
        </div>
    )
}

export default Auth
