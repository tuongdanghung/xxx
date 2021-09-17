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
    // const { title, description, url, status } = updatedPost
    // console.log(title);
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
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
