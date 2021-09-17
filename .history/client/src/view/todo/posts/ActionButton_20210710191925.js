import Button from 'react-bootstrap/Button'
import React from 'react'
import { useContext } from 'react'
import { PostContext } from '../../../context/PostContext'
const ActionButton = ({ url, _id }) => {
    const { deletePost, findPost, setShowUpdatePostModal } = useContext(PostContext)
    const choosePost = postId => {
        findPost(postId)
        setShowUpdatePostModal(true)
    }
    return (
        <div>
            <Button className='post-button ml-2' href={url} target='_blank'>
                <i className="fa fa-play-circle" aria-hidden="true" width="32" height="32"></i>
            </Button>
            <Button className='post-button' onClick={choosePost.bind(this, _id)}>
                <i className="fa fa-pencil" aria-hidden="true" width="24" height="24"></i>
            </Button>
            <Button className='post-button ml-2' onClick={deletePost.bind(this, _id)} >
                <i className="fa fa-trash-o" aria-hidden="true" width="24" height="24"></i>
            </Button>
        </div>
    )
}

export default ActionButton
