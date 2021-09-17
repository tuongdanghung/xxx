import React from 'react'
import { Login } from './auth/login'
import { Register } from './auth/register'
const Auth = ({ authRoute }) => {
    return (
        <div>
            <h1>
                hello cc
            </h1>
            {authRoute === 'login' && <Login />}
            {authRoute === 'register' && <Register />}
        </div>
    )
}

export default Auth
