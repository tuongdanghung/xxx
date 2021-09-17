import { useEffect, useContext } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
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
            <Highlight />
        </div>
    )
}

export default Covid
