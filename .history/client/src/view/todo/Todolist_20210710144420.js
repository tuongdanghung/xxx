import React from 'react'
import { PostContext } from '../../context/PostContext'
import { useContext, useEffect } from 'react'
const Todolist = () => {
    const { postState: { posts, postsLoading }, getPosts } = useContext(PostContext)
    // get post
    useEffect(() => getPosts(), [])
    return (
        <div>
            heelo
        </div>
    )
}

export default Todolist