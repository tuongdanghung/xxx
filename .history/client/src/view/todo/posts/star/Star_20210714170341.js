import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'

export default function SimpleRating({ star, _id }) {

    const {
        postState: { post, posts },
        updatePost,
        findPost
    } = useContext(PostContext)
    const [value, setValue] = useState(0);
    const [updatedPost, setUpdatedPost] = useState(post)
    const choosePost = postId => {
        findPost(postId)
        if (post) {
            setUpdatedPost(post)
            console.log(post.star);
        }
    }
    console.log(updatedPost);
    const onchange = (e) => {
        setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setValue(star)
    }, [])

    const onSubmit = async event => {
        event.preventDefault()

    }

    useEffect(() => {
        if (updatedPost) {
            const { title, description, url, status, star } = updatedPost
            console.log(updatedPost);
            updatePost(updatedPost)
        }
    }, [])


    return (
        <div>
            <Box onSubmit={onSubmit} component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Đánh giá</Typography>
                <Rating
                    onClick={choosePost.bind(this, _id)}
                    name="simple-controlled"
                    value={value}
                    onChange={onchange}
                />
            </Box>
        </div>
    );
}
