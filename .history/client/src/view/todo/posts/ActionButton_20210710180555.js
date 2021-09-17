import Button from 'react-bootstrap/Button'
import React from 'react'
import { useContext } from 'react'
import { PostContext } from '../../../context/PostContext'
const ActionButton = ({ url }, id) => {
    console.log(id);
    const { deletePost } = useContext(PostContext)
    return (
        <div>
            <Button className='post-button ml-2' href={url} target='_blank'>
                <i className="fa fa-play-circle" aria-hidden="true" width="32" height="32"></i>
            </Button>
            <Button className='post-button ml-2'>
                <i className="fa fa-pencil" aria-hidden="true" width="24" height="24"></i>
            </Button>
            <Button className='post-button ml-2' onClick={deletePost.bind(this, _id)} >
                <i className="fa fa-trash-o" aria-hidden="true" width="24" height="24"></i>
            </Button>
        </div>
    )
}

export default ActionButton
