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
    console.log(data);
    let Card
    if (data) {
        console.log(data.Deaths);
        console.log(data.Deaths);
        console.log(data.Deaths);
        Card = (<div>{data.Deaths}</div>)
    }
    return (
        <div>
            <Grid container spacing={3}>

                <Grid item sm={4} xs={12}>
                    <Cards
                        countryDetails={data}
                    />
                    {Card}
                </Grid>

            </Grid >
        </div >
    )
}
