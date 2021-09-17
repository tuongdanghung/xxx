import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
const Covid = () => {
    const [countri, setcountri] = useState([])
    console.log(countri);
    // context
    const {
        covidState: { covids },
        getCountries,
        getReportByCountry
    } = useContext(CovidContext)
    // console.log(covids)
    // 
    useEffect(() => getCountries(setcountri(covids)), [])
    // 
    const onChangeCountry = (e) => {


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
