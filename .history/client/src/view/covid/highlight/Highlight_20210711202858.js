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
    console.log(countryDetails);
    // const data = countryDetails[countryDetails.length - 1]

    // console.log(data);
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
