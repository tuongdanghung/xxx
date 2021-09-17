import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import { useEffect, useContext, useState } from 'react'
import React from 'react'
import { CovidContext } from '../../../context/CovidContext';
import Cards from './Card'
export const Highlight = () => {
    const {
        covidState: { countryDetails },
        getReportByCountry
    } = useContext(CovidContext)
    // 
    // useEffect(() => getReportByCountry(), [])
    const data = countryDetails[countryDetails.length - 1]
    console.log(data);
    // const summary = [
    //     {
    //         title: 'Số ca mắc phải',
    //         count: data.Confirmed,
    //         type: 'Confirmed'
    //     },
    //     {
    //         title: 'Số ca khỏi bệnh',
    //         count: data.Recovered,
    //         type: 'Recovered'
    //     },
    //     {
    //         title: 'Số ca tử vong',
    //         count: data.Deaths,
    //         type: 'Death'
    //     }
    // ]
    return (
        <div>
            <Grid container spacing={3}>
                {/* {
                    summary.map(item => {
                        <Card title={item.title} count={item.count} type={item.type} />
                    })
                } */}
            </Grid >
        </div >
    )
}
