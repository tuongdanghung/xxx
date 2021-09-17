import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'

export default function SimpleRating({ star, _id }) {
    const {
        postState: { post },
        updatePost,
        findPost,
    } = useContext(PostContext)


    const choosePost = postId => {
        findPost(postId)
        // updatePost(updatedPost)
        setUpdatedPost(post)
        console.log(updatedPost);
        updatePost(updatedPost)
    }
    const [updatedPost, setUpdatedPost] = useState(post)

    const Onchange = (e) => {
        setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
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
