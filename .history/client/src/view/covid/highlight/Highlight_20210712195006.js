import { Grid } from '@material-ui/core'
import { useEffect, useContext } from 'react'
import React from 'react'
import { CovidContext } from '../../../context/CovidContext';
import { Cards } from './Card'
export const Highlight = () => {
    const {
        covidState: { countryDetails },
        getReportByCountry
    } = useContext(CovidContext)
    // 
    useEffect(() => getReportByCountry(), [])
    const data = countryDetails[countryDetails.length - 1]
    if (data) {
        var summary = [
            {
                title: 'Số ca mắc phải',
                count: data.Confirmed,
                type: 'Confirmed'
            },
            {
                title: 'Số ca khỏi bệnh',
                count: data.Recovered,
                type: 'Recovered'
            },
            {
                title: 'Số ca tử vong',
                count: data.Deaths,
                type: 'Death'
            }
        ]
    }
    console.log(summary);
    const a = () => {
        if (summary) {
            <Grid container spacing={3}>
                {summary.map((data) => (
                    <Grid item sm={4} xs={12}>
                        <Cards
                            title={data.title}
                            count={data.count}
                            type={data.type}
                        />
                    </Grid>
                ))}
            </Grid >
        }
    }
    return (
        <div>
            {a}
        </div >
    )
}
