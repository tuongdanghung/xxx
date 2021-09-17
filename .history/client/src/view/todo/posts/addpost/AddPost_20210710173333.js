import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../../../context/PostContext'
const AddPost = () => {
    // context
    const { showAddPostModal, setShowAddPostModal, addPost, setShowToast } = useContext(PostContext)

    // state
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        url: '',
        status: 'TO LEARN',
    })

    const { title, description, url } = newPost
    // 
    const onChangeNewPostForm = (e) => setNewPost({ ...newPost, [e.target.name]: e.target.value })
    // 
    const onSubmit = async e => {
        e.preventDefault()
        const { success, message } = await addPost(newPost)
        resetAddPostData()
        setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
    }

    const resetAddPostData = () => {
        setNewPost({ title: '', description: '', url: '', status: 'TO LEARN', })
        setShowAddPostModal(false)
    }




    // 
    const closeDialog = () => {
        resetAddPostData()
    }
    // 
    return (
        <div>
            <Modal show={showAddPostModal} animation={false} onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Them bai di thang lon
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control value={title} onChange={onChangeNewPostForm} type="text" placeholder="title" name="title" required aria-describedby="title-help" />
                            <Form.Text id="title-help" muted>required</Form.Text>
                        </Form.Group>
                        {/*  */}
                        <Form.Group>
                            <Form.Control value={description} onChange={onChangeNewPostForm} as='textarea' rows={3} placeholder="description" name="description" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control value={url} onChange={onChangeNewPostForm} type="text" placeholder="URL" name="url" />
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
