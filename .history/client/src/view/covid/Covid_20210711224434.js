import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
const Covid = () => {
    const {
        covidState: { covids },
        getCountries,
        getReportByCountry
    } = useContext(CovidContext)
    // 
    useEffect(() => getCountries(), [])
    // 
    const handleOnChange = (e) => {
        const { Slug } = covids.find((country) => country.ISO2 === e.target.value)
        getReportByCountry(Slug)
        console.log({ Slug });
    }
    useEffect(() => {
    })
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} handleOnChange={handleOnChange} />
            <Highlight />
        </div>
    )
}

export default Covid
