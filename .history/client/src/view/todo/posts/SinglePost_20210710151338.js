import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"

import React from 'react'

const SinglePost = ({ post: { _id, status, title, description, url } }) => {
    return (
        <Card className="shadow" border={status === 'LEARNED' ? 'success' : status === 'LEARNING' ? 'warning' : 'danger'}>
            <Card.Body>
                <Card.Title>

                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SinglePost
