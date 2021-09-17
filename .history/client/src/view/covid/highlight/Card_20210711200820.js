import React from 'react'
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'Confirmed') return { borderLeft: '5px solid green' }
        if (props.type === 'Recovered') return { borderLeft: '5px solid red' }
        if (props.type === 'Death') return { borderLeft: '5px solid black' }
    }
})

export const Cards = (title, count, type) => {
    const styles = useStyles({ type })
    return (
        <div>
            <Grid item sm={4} xs={12}>
                <Card className={styles.wrapper}>
                    <CardContent>
                        <Typography component="p" variant="body2">
                            {title}
                        </Typography>
                        {/*  */}
                        <Typography component="span" variant="body2">
                            {count}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
