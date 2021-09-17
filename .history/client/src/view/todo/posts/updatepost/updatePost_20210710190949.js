import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../../../context/PostContext'
const UpdatePost = () => {
    // context
    const { showUpdatePostModal,
        setShowUpdatePostModal,
        updatePost,
        setShowToast,
        postState: { post } } = useContext(PostContext)

    // state
    const [updatedPost, setUpdatePost] = useState(post)

    const { title, description, url, status } = updatedPost
    // 
    const onChangeUpdatePostForm = (e) => setUpdatePost({ ...updatedPost, [e.target.name]: e.target.value })
    // 
    const onSubmit = async e => {
        e.preventDefault()
        const { success, message } = await updatePost(updatedPost)
        // resetAddPostData()
        // setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
    }

    // const resetAddPostData = () => {
    //     setUpdatePost({ title: '', description: '', url: '', status: 'TO LEARN', })
    //      (false)
    // }




    // 
    // const closeDialog = () => {
    //     resetAddPostData()
    // }
    // 
    return (
        <div>
            <Modal show={showUpdatePostModal} animation={false} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        sua bai di thang lon
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control value={title} onChange={onChangeUpdatePostForm} type="text" placeholder="title" name="title" required aria-describedby="title-help" />
                            <Form.Text id="title-help" muted>required</Form.Text>
                        </Form.Group>
                        {/*  */}
                        <Form.Group>
                            <Form.Control value={description} onChange={onChangeUpdatePostForm} as='textarea' rows={3} placeholder="description" name="description" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control value={url} onChange={onChangeUpdatePostForm} type="text" placeholder="URL" name="url" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as='select' value={status} name="status" onChange={onChangeUpdatePostForm}>
                                <option value="TO LEARN">TO LEARN</option>
                                <option value="LEARNING">LEARNING</option>
                                <option value="LEARNED">LEARNED</option>
                            </Form.Control>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" >Cancel</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default UpdatePost
