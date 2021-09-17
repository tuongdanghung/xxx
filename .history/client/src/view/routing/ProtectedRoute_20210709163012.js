import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import { Header } from '../layout/Header/Header'
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    if (authLoading)
        return (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <div className="App">
                        <Header />
                        <Component {...rest} {...props} />
                    </div>
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    )
}

export default ProtectedRoute