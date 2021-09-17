import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
const Covid = () => {

    // context
    const {
        covidState: { covids },
        getCountries,
    } = useContext(CovidContext)
    // console.log(covids)
    // 
    useEffect(() => getCountries(), [])
    // 
    // console.log(countries);
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} />
        </div>
    )
}

export default Covid
