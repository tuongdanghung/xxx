import { useEffect, useState, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'
export default function SimpleRating(star) {
    const [value, setValue] = useState(0);

    const {
        postState: { post },
        updatePost,
    } = useContext(PostContext)

    console.log(post);
    useEffect(() => setValue(post), [post])
    useEffect(() => {
        setValue(star.star)
    }, [])
    const newValue = e => {
        setValue({ [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Đánh giá</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={newValue}
                />
            </Box>
        </div>
    );
}
