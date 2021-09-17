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

    const target = (e) => {
        const { Slug } = covids.find((countries) => countries.ISO2 === e.target.value)
        console.log(Slug);
    }

    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} target={target} />
            <Highlight />
            <Summary countryDetails={countryDetails} />
        </div>
    )
}

export default Covid
