import { useEffect, useState, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'
export default function SimpleRating(star, _id) {
    const [value, setValue] = useState(0);

    const {
        postState: { post },
        setShowUpdatePostModal,
        updatePost,
        findPost,
    } = useContext(PostContext)
    console.log(post)

    const choosePost = postId => {
        findPost(postId)
    }


    // State
    const [updatedPost, setUpdatedPost] = useState(post)

    useEffect(() => setUpdatedPost(post), [post])

    const { title } = updatedPost
    console.log(title);

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Đánh giá</Typography>
                <Rating
                    onClick={choosePost.bind(this, _id)}
                    name="simple-controlled"
                    value={value}
                // onChange={newValue}
                />
            </Box>
        </div>
    );
}
