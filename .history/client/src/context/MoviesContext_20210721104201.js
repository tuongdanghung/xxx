import { createContext, useReducer, useEffect } from 'react'
import {
    URL,
    POSTS_LOADED_FAIL,
    POSTS_LOADED_SUCCESS,
} from './link'
import axios from 'axios'
import { moviesReducer } from '../reducers/moviesReducer'
export const MoviesContext = createContext()
export const Movies = ({ children }) => {
    // state
    const [movies, dispatch] = useReducer(moviesReducer, {
        movies: []
    })

    // 
    const getPosts = async () => {
        try {
            const response = await axios.get(`${URL}/posts`)
            console.log(response.data);
            if (response.data.success) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.posts })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }

    const postContextData = {
        getPosts,
    }
    return (
        <MoviesContext.Provider value={postContextData}>
            {children}
        </MoviesContext.Provider>
    )
}
export default Movies