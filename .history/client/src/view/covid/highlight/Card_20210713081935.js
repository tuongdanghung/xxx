import React from 'react'
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'Confirmed') return { borderLeft: '5px solid green' }
        if (props.type === 'Recovered') return { borderLeft: '5px solid red' }
        if (props.type === 'Death') return { borderLeft: '5px solid black' }
    }
})

export const Cards = (countryDetails) => {
    console.log(countryDetails);
    // const styles = useStyles({ type })
    return (
        <>xxxx</>
    )
}
