import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'

export default function SimpleRating({ star, _id }) {
    const {
        postState: { post },
        setShowUpdatePostModal,
        updatePost,
        setShowToast,
        findPost
    } = useContext(PostContext)

    const [updatedPost, setUpdatedPost] = useState()
    const [val, setval] = useState("")
    console.log(val);
    const choosePost = postId => {
        findPost(postId)
        setUpdatedPost(post)
        if (updatedPost) {
            console.log(updatePost);
        }

    }
    const Onchange = (e) => {
        // setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
        setval({ ...updatedPost, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Đánh giá</Typography>
                <Rating
                    name='star'
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