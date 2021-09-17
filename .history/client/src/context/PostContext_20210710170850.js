import { createContext, useReducer, useState } from 'react'
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
        post: null,
        posts: [],
        postsLoading: true
    })

    const [showAddPostModal, setShowAddPostModal] = useState(false)
    const [showUpdatePostModal, setShowUpdatePostModal] = useState(false)
    const [showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    })

    // Get all posts
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

    // add post
    const addPost = async newPost => {
        try {
            const response = await axios.post(`${URL}/posts`, newPost)
            if (response.data.success) {
                dispatch({ type: ADD_POST, payload: response.data.post })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server error' }
        }
    }

    // Post context data
    const postContextData = {
        postState,
        getPosts,
        showAddPostModal,
        setShowAddPostModal,
        addPost
    }

    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider