import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const AddPost = () => {
    return (
        <div>
            <Modal show={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Them bai di thang lon
                    </Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="title" name="title" required aria-describedby="title-help" />
                            <Form.Text id="title-help" muted>required</Form.Text>
                        </Form.Group>
                        {/*  */}
                        <Form.Group>
                            <Form.Control as='textarea' rows={3} placeholder="description" name="description" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="URL" name="url" />
                        </Form.Group>
                    </Modal.Body>
                </Form>
            </Modal>
        </div>
    )
}

export default AddPost
