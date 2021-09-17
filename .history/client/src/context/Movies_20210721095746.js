import { createContext, useReducer, useEffect } from 'react'
import { URL, LOCAL_STORAGE_TOKEN_NAME } from './link'
import axios from 'axios'
import { moviesReducer } from '../reducers/moviesReducer'
export const PostContext = createContext()
export const Movies = ({ children }) => {
    // state
    const [movies, dispatch] = useReducer(moviesReducer, {
        movies: []
    })
}
