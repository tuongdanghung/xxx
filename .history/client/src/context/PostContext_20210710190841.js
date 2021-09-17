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

    // delete
    const deletePost = async postId => {
        try {
            const response = await axios.delete(`${URL}/posts/${postId}`)
            if (response.data.success)
                dispatch({ type: DELETE_POST, payload: postId })
        } catch (error) {
            console.log(error)
        }
    }
    // find post
    const findPost = postId => {
        const post = postState.posts.find(post => post.id === postId);
        dispatch({ type: FIND_POST, payload: post })

    }
    // edit
    const updatePost = async updatePost => {
        try {
            const response = await axios.put(`${URL}/posts/${updatePost._id}, updatePost`)
            if (response.data.success) {
                dispatch({ type: UPDATE_POST, payload: response.data.post })
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
        addPost,
        showToast,
        setShowToast,
        deletePost,
        updatePost,
        showUpdatePostModal,
        setShowUpdatePostModal,
        findPost
    }

    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider