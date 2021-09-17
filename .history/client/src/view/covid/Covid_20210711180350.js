import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
const Covid = () => {
    const [countri, setcountri] = useState([])

    // context
    const {
        covidState: { covids },
        getCountries,
    } = useContext(CovidContext)
    // console.log(covids)
    // 
    useEffect(() => getCountries(setcountri(covids)), [])
    // 
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={covids} />
            <Highlight />
        </div>
    )
}

export default Covid
