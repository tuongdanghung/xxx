import { Grid } from '@material-ui/core'
import React from 'react'

export const Highlight = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                    1
                </Grid>
                {/*  */}
                <Grid item sm={4} xs={12}>
                    2
                </Grid>
                {/*  */}
                <Grid item sm={4} xs={12}>
                    3
                </Grid>
            </Grid>
        </div>
    )
}
