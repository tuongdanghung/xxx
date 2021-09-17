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

    return (
        <div>
            <Grid>
                {
                    summary.map(item => {
                        <Cards title={item.title} count={item.count} type={item.type} />
                    })
                }
            </Grid >
        </div >
    )
}
