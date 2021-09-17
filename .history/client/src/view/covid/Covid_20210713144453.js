import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
import { Summary } from './summary/summary';
const Covid = () => {
    const {
        covidState: { covids, countryDetails },
        getCountries,
        getReportByCountry,
    } = useContext(CovidContext)
    // 
    useEffect(() => getCountries(), [])
    useEffect(() => getReportByCountry('vietnam'), [])
    const tar = () => {
        tar()
    }
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} tar={tar} />
            <Highlight />
            <Summary countryDetails={countryDetails} />
        </div>
    )
}

export default Covid
