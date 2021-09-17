import { useEffect, useContext } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'
const Covid = () => {

    // context
    const {
        covidState: { covids, covidsLoading },
        getCountries,
    } = useContext(CovidContext)

    useEffect(() => getCountries(), [])

    let body = null
    if (covidsLoading) {
        body = (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    } else if (covids.length === 0) {
        body = (
            <>
                <Card className='text-center mx-5 my-5'>
                    <Card.Header as='h1'>Hi</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to LearnIt</Card.Title>
                        <Card.Text>
                            Click the button below to track your first skill to learn
                        </Card.Text>

                    </Card.Body>
                </Card>
            </>
        )
    } else {
        body = (
            <>
                <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>

                </Row>

                {/* Open Add Post Modal */}
                <OverlayTrigger
                    placement='left'
                    overlay={<Tooltip>Add a new thing to learn</Tooltip>}
                >

                </OverlayTrigger>
            </>
        )
    }

    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country />
        </div>
    )
}

export default Covid
