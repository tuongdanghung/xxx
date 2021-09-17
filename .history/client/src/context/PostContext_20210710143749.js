import { createContext, useReducer } from 'react'
import { postReducer } from '../reducers/postReducer'
import {
    URL,
    POSTS_LOADED_FAIL,
    POSTS_LOADED_SUCCESS,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    FIND_POST
} from './link'
import axios from 'axios'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    // State
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true
    })

    // get all post
    const getPosts = async () => {
        try {
            const response = await axios.get(`${URL}/posts`)
            if (response.data.success) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.posts })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }

    // post content data
    const postContextData = { postState, getPosts }

    return (
        <PostContextProvider value={postContextData}>
            {children}
        </PostContextProvider>
    )
}

export default PostContextProvider