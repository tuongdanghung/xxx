import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'

export default function SimpleRating({ _id }) {
    const { findPost } = useContext(PostContext)
    const choosePost = postId => {
        findPost(postId)
    }

    const {
        postState: { post },
        setShowUpdatePostModal,
        updatePost,
        setShowToast
    } = useContext(PostContext)
    const [updatedPost, setUpdatedPost] = useState(post)
    useEffect(() => setUpdatedPost(post), [post])
    const { star } = updatedPost
    console.log(star);
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
                    onClick={choosePost.bind(this, _id)}
                    name="simple-controlled"
                    value=""
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
                />
            </Box>
        </div>
    );
}
