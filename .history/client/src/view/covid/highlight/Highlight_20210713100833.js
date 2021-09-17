import { useEffect, useContext, } from 'react'
import React from 'react'
import { CovidContext } from '../../../context/CovidContext';
import './highlight.scss'
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
    let statistics
    if (data) {
        statistics = (<div>
            <Row>
                <Col>
                    <Card ClassName="Card_Confirmed">
                        <Card.Header className="Header_Confirmed" as='h6'>Số Ca Mắc Phải </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Confirmed}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
                <Col>
                    <Card ClassName="Card_Recovered">
                        <Card.Header className="Header_Recovered" as='h6'>Số Ca Khỏi Bệnh </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Recovered}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
                <Col>
                    <Card ClassName="Card_Deaths">
                        <Card.Header className="Header_Deaths" as='h6'>Số Ca Tử Vong </Card.Header>
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
