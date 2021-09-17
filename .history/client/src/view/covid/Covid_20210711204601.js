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
    const [select, setSelection] = useState('')
    const onChangeCountry = (e) => {
        setSelection(e.target.value)


    }
    useEffect((e) => {
        const { Slug } = covids.find((country) => country.ISO2.toUpperCase() === e.target.value)
        console.log(Slug);
        getReportByCountry(Slug)
        console.log(getReportByCountry(Slug));
    })
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} onChangeCountry={onChangeCountry} />
            <Highlight />
        </div>
    )
}

export default Covid
