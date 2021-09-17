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
        getReportByCountry
    } = useContext(CovidContext)
    // console.log(covids)
    // 
    useEffect(() => getCountries(setcountri(covids)), [])
    // 
    const onChangeCountry = (e) => {
        const { Slug } = countri.find(country => country.ISO2 === e.target.value);
        getReportByCountry(Slug).then(res => {
            console.log(res);
        })

    }
    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country countries={countri} onChangeCountry={onChangeCountry} />
            <Highlight />
        </div>
    )
}

export default Covid
