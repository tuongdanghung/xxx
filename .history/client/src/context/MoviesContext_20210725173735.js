import { createContext, useReducer, useEffect } from 'react'
import {
    URL,
    POSTS_LOADED_FAIL,
    POSTS_LOADED_SUCCESS,
} from './link'
import axios from 'axios'
import { moviesReducer } from '../reducers/moviesReducer'
export const MoviesContext = createContext()
export const MoviesContextProvider = ({ children }) => {
    // state
    const [moviesState, dispatch] = useReducer(moviesReducer, {
        movies: []
    })

    // 
    const getMovies = async () => {
        try {
            const response = await axios.get(`${URL}/movies`)
            if (response.data.success) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.movies })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }

    const MovieContextData = {
        getMovies,
        moviesState
    }
    return (
        <MoviesContext.Provider value={MovieContextData}>
            {children}
        </MoviesContext.Provider>
    )
}
export default MoviesContextProvider