import React from 'react'
import { PostContext } from '../../context/PostContext'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect } from 'react'
// 
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Toast from 'react-bootstrap/Toast'
// 
import SinglePost from './posts/SinglePost'
import AddPost from './posts/addpost/AddPost'

const Todolist = () => {
    // context
    const { authState: { user: { username } } } = useContext(AuthContext)
    const {
        postState:
        { posts, postsLoading },
        getPosts,
        setShowAddPostModal,
        showToast: {
            show,
            message,
            type
        }, setShowToast
    } = useContext(PostContext)
    // get post
    useEffect(() => getPosts(), [])
    let body = null

    if (postsLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        )
    } else if (posts.length === 0) {
        body = (
            <>
                <Card className="text-center mx-5 my-5">
                    <Card.Header>Ê thằng lồn {username}</Card.Header>
                    <Card.Body>Bấm nút để học đi mày</Card.Body>
                    <Button variant="primary">Bấm vô đây</Button>
                </Card>
            </>
        )
    } else {
        body = (
            <>
                <Row className="row-cols-1 row-cols-md-3 g-4 mx-autu mt-3">
                    {posts.map(post => (
                        <Col key={post._id} className="my-2">
                            <SinglePost post={post} />
                        </Col>
                    ))}
                </Row>
                {/* open modal */}
                {/* <OverlayTrigger placement="left" overlay={<Tooltip>
                    add
                </Tooltip>}> */}
                <Button className="btn-floating" onClick={setShowAddPostModal.bind(this, true)}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </Button>
                {/* </OverlayTrigger> */}

            </>
        )
    }

    return (
        <div>
            {body}
            <AddPost />
            <Toast show={show} styles={{ position: 'fixed', top: '20%', left: '20%', right: '10px' }} className={`bg-${type} text-white`}>
                <Toast.Body>
                    <strong>{message}</strong>
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default Todolist