import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import { Login } from './auth/login'
import { Register } from './auth/register'
import Spinner from 'react-bootstrap/Spinner'
const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)

    let body

    if (authLoading) {
        body = (
            <div className="d-flex.justify-content-center.mt-2">
                <Spinner animation='border' variant='info' />
            </div>
        )
    } else if (isAuthenticated) {
        return <Redirect to='/home' />
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
            {body}

        </div>
    )
}

export default Auth
