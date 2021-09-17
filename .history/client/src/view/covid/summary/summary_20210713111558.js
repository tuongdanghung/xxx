import { Grid } from '@material-ui/core'
import React from 'react'
import { LightChart } from './Chart/LightChart'

export const summary = () => {
    return (
        <div>
            vlxx
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LightChart data={[]} />
                </Grid>
                {/*  */}
                <Grid item sm={4} xs={12}>

                </Grid>
            </Grid>
        </div>
    )
}
