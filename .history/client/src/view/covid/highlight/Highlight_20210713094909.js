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
            <Row>
                <Col>
                    <Card>
                        <Card.Header
                            style={{ background: 'danger' }}
                            as='h5'>Số Ca Mắc Phải </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Confirmed}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
                <Col>
                    <Card>
                        <Card.Header as='h5'>Số Ca Khỏi Bệnh </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Recovered}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
                <Col className='my-2'>
                    <Card>
                        <Card.Header as='h5'>Số Ca Tử Vong </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Deaths}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*  */}

        </div>

        )
    }
    return (
        <div className="">
            {statistics}
        </div >
    )
}
