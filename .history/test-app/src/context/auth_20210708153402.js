import { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/auth';
import { URL, LOCAL_STORAGE_TOKEN_NAME } from './link'
import axios from 'axios';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${URL}/auth/login`, userForm)
            if (response.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                )
            }
            return response.data

        } catch (error) {
            if (error.res.data) return error.res.data
            else return { success: false, error: error }
        }
    }
    const AuthContextData = { loginUser }
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider