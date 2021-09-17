import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'

export default function SimpleRating({ star, _id }) {
    const {
        postState: { post },
        showUpdatePostModal,
        setShowUpdatePostModal,
        updatePost,
        setShowToast,
        findPost
    } = useContext(PostContext)

    const [updatedPost, setUpdatedPost] = useState(post)
    const choosePost = postId => {
        findPost(postId)
        // updatePost(updatedPost)
        setUpdatedPost(post)

        // updatePost(updatedPost)
    }

    const Onchange = (e) => {
        setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
    }
    const onSubmit = async event => {
        event.preventDefault()
        const { success, message } = await updatePost(updatedPost)
        setShowUpdatePostModal(false)
        setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
    }
    return (
        <div>
            <Box onSubmit={onSubmit} component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Đánh giá</Typography>
                <Rating
                    name='rating'
                    value={star}
                    onClick={choosePost.bind(this, _id)}
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    onChange={Onchange}
                />
            </Box>
        </div>
    );
}
