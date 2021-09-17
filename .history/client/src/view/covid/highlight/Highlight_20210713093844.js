import { useEffect, useContext, } from 'react'
import React from 'react'
import { CovidContext } from '../../../context/CovidContext';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export const Highlight = () => {
    const {
        covidState: { countryDetails },
        getReportByCountry
    } = useContext(CovidContext)
    // 
    useEffect(() => getReportByCountry(), [])
    const data = countryDetails[countryDetails.length - 1]
    console.log(data);
    let statistics
    if (data) {
        console.log(data.Confirmed);
        console.log(data.Recovered);
        console.log(data.Deaths);
        statistics = (<div>
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                <Col>
                    <Card>
                        <Card.Header as='h1'>Số Ca Mắc Phải </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Confirmed}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*  */}
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                <Col>
                    <Card>
                        <Card.Header as='h1'>Số Ca Khỏi Bệnh </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Recovered}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*  */}
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                <Col>
                    <Card>
                        <Card.Header as='h1'>Số Ca Tử Vong </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Deaths}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

        )
    }
    return (
        <div className='my-2'>
            {statistics}
        </div >
    )
}
