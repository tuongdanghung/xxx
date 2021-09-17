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
    const [a, seta] = useState("")
    const onChangeCountry = (e
    ) => {
        seta(e.target.value)
    }
    useEffect(() => {
        if (a) {
            const { Slug } = covids.find((countries) => countries.ISO2 === a)
            getReportByCountry(Slug)
        }

    }, [a, countries])
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} onChangeCountry={onChangeCountry} value={ } />
            <Highlight />
        </div>
    )
}

export default Covid
