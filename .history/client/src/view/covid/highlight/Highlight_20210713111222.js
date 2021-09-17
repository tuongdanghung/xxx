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
    console.log(data);
    let statistics
    if (data) {
        statistics = (<div>
            <h5>Tổng số thống kê covid-19 tại <span>{data.Country}</span></h5>
            <Row>
                <Col>
                    <Card className="Card_Confirm">
                        <Card.Header className="Header_Confirmed" as='h6'>Số Ca Mắc Phải </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Confirmed}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
                <Col>
                    <Card className="Card_Recovered">
                        <Card.Header className="Header_Recovered" as='h6'>Số Ca Khỏi Bệnh </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.Recovered}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
                <Col>
                    <Card className="Card_Deaths">
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
        <div className="my-2">
            {statistics}
        </div >
    )
}
