import { createContext, useReducer } from 'react'
import { postReducer } from '../reducers/postReducer'
import { URL } from './link'
import axios from 'axios'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    // State
    const [postState, dispatch] = useReducer(postReducer, {
        post: null,
        posts: [],
        postsLoading: true
    })

    // get all post
    const getPosts = async () => {
        try {
            const response = await axios.get(`${URL}/posts`)
            if (response.data.success) {
                dispatch({ type: 'POSTS_LOAD_SUCCESS', payload: response.data.posts })
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'server error' }
        }
    }

    // post context data
    const postContextData = {
        postState,
        getPosts,
    }

    return (
        <PostContextProvider value={postContextData}>
            {children}
        </PostContextProvider>
    )
}

export default PostContextProvider