import React from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
const Auth = ({ authRoute }) => {
    return (
        <div>
            cccc
            <>
                {authRoute === 'login' && <Login />}
                {authRoute === 'register' && <Register />}
            </>
        </div>
    )
}

export default Auth
