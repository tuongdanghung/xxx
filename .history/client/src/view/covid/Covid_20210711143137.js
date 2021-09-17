import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
const Covid = () => {

    // context
    const {
        covidState: { covids },
        getCountries,
    } = useContext(CovidContext)
    console.log(covids)
    // 
    const [countries, setCountries] = useState([])
    // 
    useEffect(() => getCountries(setCountries), [])
    // 
    // console.log(countries);
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={countries} />
        </div>
    )
}

export default Covid
