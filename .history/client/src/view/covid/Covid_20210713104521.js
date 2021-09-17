import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
const Covid = () => {
    const {
        covidState: { covids },
        getCountries,
        getReportByCountry,
    } = useContext(CovidContext)
    // 
    useEffect(() => getCountries(), [])
    useEffect(() => getReportByCountry('vietnam'), [])
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} />
            <h1>Số liệu covid-19 tại Việt Nam</h1>
            <Highlight />
        </div>
    )
}

export default Covid
