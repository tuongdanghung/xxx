import React from 'react'
import Login from './auth/Login'
const Auth = ({ authRoute }) => {
    return (
        <div>
            cccc
            <>
                {authRoute === 'login' && <Login />}
                {/* {authRoute === 'register' && <RegisterForm />} */}
            </>
        </div>
    )
}

export default Auth
