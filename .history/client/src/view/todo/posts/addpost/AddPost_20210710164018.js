import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { PostContext } from '../../../../context/PostContext'
const AddPost = () => {
    // context
    const { showAddPostModal, setShowAddPostModal } = useContext(PostContext)
    const closeDialog = () => {
        setShowAddPostModal(false)
    }
    return (
        <div>
            <Modal show={showAddPostModal} animation={false} onHide={closeDialog}>
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
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeDialog}>Cancel</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default AddPost
