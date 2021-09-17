import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import { useEffect, useContext, useState } from 'react'
import React from 'react'
import { CovidContext } from '../../../context/CovidContext';
export const Highlight = () => {
    // const {
    //     covidState: { covids },
    //     getReportByCountry
    // } = useContext(CovidContext)
    // // 
    // useEffect(() => getReportByCountry(), [])
    // console.log(covids);
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography component="p" variant="body2">
                                Số ca mắc phải
                            </Typography>
                            {/*  */}
                            <Typography component="span" variant="body2">
                                3000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*  */}

                <Grid item sm={4} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography component="p" variant="body2">
                                Số ca khỏi bệnh
                            </Typography>
                            {/*  */}
                            <Typography component="span" variant="body2">
                                3000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/*  */}
                <Grid item sm={4} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography component="p" variant="body2">
                                Số ca tử vong
                            </Typography>
                            {/*  */}
                            <Typography component="span" variant="body2">
                                3000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
