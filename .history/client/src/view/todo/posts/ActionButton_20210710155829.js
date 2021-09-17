import Button from 'react-bootstrap/Button'
import React from 'react'

const ActionButton = ({ url }, _id) => {
    return (
        <div>
            <Button className='post-button' href={url} target='_blank'>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
            </Button>
        </div>
    )
}

export default ActionButton
