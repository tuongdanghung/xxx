import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'

export default function SimpleRating({ _id }) {

    const {
        postState: { post },
        showUpdatePostModal,
        setShowUpdatePostModal,
        updatePost,
        setShowToast, findPost
    } = useContext(PostContext)
    const [updatedPost, setUpdatedPost] = useState(post)
    const choosePost = postId => {
        findPost(postId)
        if (post) {
            console.log(post.status);
        }
    }

    const onchange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Đánh giá</Typography>
                <Rating
                    onClick={choosePost.bind(this, _id)}
                    name="simple-controlled"
                    // value={value}
                    onChange={onchange}
                />
            </Box>
        </div>
    );
}
