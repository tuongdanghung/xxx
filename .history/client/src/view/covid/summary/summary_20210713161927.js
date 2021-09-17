import { Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { LightChart } from './Chart/LightChart'
import { HightMap } from './Chart/HightMap'
export const Summary = ({ countryDetails, selectedStar }) => {
    // const [mapData, setMapData] = useState({});

    // useEffect(() => {
    //     if (selectedStar) {
    //         import(
    //             `@highcharts/map-collection/countries/${selectedStar}/${selectedStar}-all.geo.json`
    //         ).then((res) => {
    //             setMapData(res);
    //         })
    //     }
    // }, [selectedStar])
    // console.log(selectedStar);
    return (
        <div>
            <Grid className="mt-5" container spacing={3}>
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
