import React from 'react'
import { PostContext } from '../../context/PostContext'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Todolist = () => {
    // context
    const { authState: { user: { username } } } = useContext(AuthContext)
    const { postState: { posts, postsLoading }, getPosts } = useContext(PostContext)
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
    }

    return (
        <div>
            heelo
        </div>
    )
}

export default Todolist