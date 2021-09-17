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
    const onChangeCountry = (e) => {

        const { Slug } = covids.find(country => country.ISO2.toLowerCase() === e.target.value)
        console.log(e, Slug);
        // getReportByCountry()
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
