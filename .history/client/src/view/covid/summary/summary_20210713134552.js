import { Grid } from '@material-ui/core'
import React from 'react'
import { LightChart } from './Chart/LightChart'
import { HightMap } from './Chart/HightMap'
export const Summary = ({ countryDetails }) => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LightChart data={countryDetails} />
                </Grid>
                {/*  */}
                <Grid item sm={4} xs={12}>
                    <HightMap />
                </Grid>
            </Grid>
        </div>
    )
}