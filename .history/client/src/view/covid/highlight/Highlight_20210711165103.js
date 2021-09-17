import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

export const Highlight = () => {
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
