import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'
import Button from 'react-bootstrap/Button'

export default function SimpleRating({ star, _id }) {

    const {
        postState: { post },
        showUpdatePostModal,
        setShowUpdatePostModal,
        updatePost,
        setShowToast, findPost
    } = useContext(PostContext)
    const [updatedPost, setUpdatedPost] = useState(post)
    console.log(post);
    const choosePost = postId => {
        findPost(postId)
    }
    return (
        <div>
            <Button className='post-button ml-2' href={url} target='_blank'>
                <i className="fa fa-play-circle" aria-hidden="true" width="32" height="32"></i>
            </Button>
            <Button className='post-button ml-2' onClick={choosePost.bind(this, _id)}>
                <i className="fa fa-pencil" aria-hidden="true" width="24" height="24"></i>
            </Button>
            <Button className='post-button ml-2' onClick={deletePost.bind(this, _id)} >
                <i className="fa fa-trash-o" aria-hidden="true" width="24" height="24"></i>
            </Button>
        </div>
    );
}
