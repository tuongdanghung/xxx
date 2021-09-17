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
        findPost,
        setShowToast
    } = useContext(PostContext)
    const [updatedPost, setUpdatedPost] = useState()

    const choosePost = postId => {
        findPost(postId)
        console.log(postId);

    }
    useEffect(() => {
        setUpdatedPost(post)
    }, [])
    console.log(updatedPost);
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Đánh giá</Typography>
                <Rating
                    value={star}
                    onClick={choosePost.bind(this, _id)}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
                />
            </Box>
        </div>
    );
}
