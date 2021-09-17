import Button from 'react-bootstrap/Button'
import React from 'react'

const ActionButton = ({ url }, _id) => {
    return (
        <div>
            <Button className='post-button ml-3' href={url} target='_blank'>
                <i className="fa fa-play-circle" aria-hidden="true" width="32" height="32"></i>
            </Button>
            <Button className='post-button ml-3' href={url} target='_blank'>
                <i className="fa fa-pencil" aria-hidden="true" width="24" height="24"></i>
            </Button>
            <Button className='post-button ml-3' href={url} target='_blank'>
                <i className="fa fa-trash-o" aria-hidden="true" width="24" height="24"></i>
            </Button>
        </div>
    )
}

export default ActionButton
