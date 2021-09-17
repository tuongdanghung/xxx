import { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostContext } from '../../../../context/PostContext'

export default function SimpleRating({ star, _id }) {
    const choosePost = postId => {
        // findPost(postId)
        // setShowUpdatePostModal(true)
        console.log(_id);
    }
    // const [value, setValue] = useState(0);
    // useEffect(() => {
    //     setValue(star)
    // }, star, [])
    // console.log(value);
    // console.log(star);
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