import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
const Covid = () => {
    const {
        covidState: { covids },
        getCountries,
    } = useContext(CovidContext)
    // console.log(covids)
    // 
    useEffect(() => getCountries(), [])
    // 
    const onChangeCountry = (e) => {
        console.log(covids);
    }
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} onChangeCountry={onChangeCountry} />
            <Highlight />
        </div>
    )
}

export default Covid
