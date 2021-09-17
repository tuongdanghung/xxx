import Login from '../view/auth/Login'
import Register from '../view/auth/Login'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

const Auth = ({ authRoute }) => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    let body

    if (authLoading)
        body = (
            <div className='d-flex justify-content-center mt-2'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    else if (isAuthenticated) return <Redirect to='/home' />
    else
        body = (
            <>
                {authRoute === 'login' && <Login />}
                {authRoute === 'register' && <Register />}
            </>
        )

    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>LearnIt</h1>
                    <h4>Keep track of what you are learning</h4>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth
