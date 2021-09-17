import { useEffect, useContext, } from 'react'
import React from 'react'
import { CovidContext } from '../../../context/CovidContext';
import Card from 'react-bootstrap/Card'
export const Highlight = () => {
    const {
        covidState: { countryDetails },
        getReportByCountry
    } = useContext(CovidContext)
    // 
    useEffect(() => getReportByCountry(), [])
    const data = countryDetails[countryDetails.length - 1]
    console.log(data);
    let Card
    if (data) {
        console.log(data.Confirmed);
        console.log(data.Recovered);
        console.log(data.Deaths);
        Card = (<div>
            <Card>
                <Card as='h1'>Số Ca Mắc Phải </Card>
                <Card>
                    <Card>{data.Confirmed}</Card>
                </Card>
            </Card>
        </div>

        )
    }
    return (
        <div>
            {Card}
        </div >
    )
}
