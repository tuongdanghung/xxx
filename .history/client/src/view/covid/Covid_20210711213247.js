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
    const [select, setSelection] = useState('vn')
    const onChangeCountry = (e) => {
        setSelection('vn')
        const { Slug } = covids.find((country) => country.ISO2 === e.target.value)
        getReportByCountry(Slug)
        console.log({ Slug });
    }
    useEffect((e) => {
        const a = covids.find((country) => country.ISO2 === e.target.value)
        console.log(a);
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
