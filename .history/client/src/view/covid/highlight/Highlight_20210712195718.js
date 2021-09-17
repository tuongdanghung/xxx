import { Grid } from '@material-ui/core'
import { useEffect, useContext } from 'react'
import React from 'react'
import { CovidContext } from '../../../context/CovidContext';
import { Cards } from './Card'
export const Highlight = ({ summary }) => {
    const {
        covidState: { countryDetails },
        getReportByCountry
    } = useContext(CovidContext)
    // 
    useEffect(() => getReportByCountry(), [])
    const data = countryDetails[countryDetails.length - 1]
    return (
        <div>
            <Grid container spacing={3}>
                {summary.map((data) => (
                    <Grid item sm={4} xs={12}>
                        <Cards
                            countryDetails={data}
                        />
                    </Grid>
                ))}
            </Grid >
        </div >
    )
}
