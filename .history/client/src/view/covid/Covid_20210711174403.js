import { useEffect, useContext } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import { Highlight } from './highlight/Highlight'
const Covid = () => {

    // context
    const {
        covidState: { covids },
        getCountries,
        getReportByCountry
    } = useContext(CovidContext)
    // console.log(covids)
    // 
    useEffect(() => getCountries(), [])
    // 
    const onChangeCountry = (e) => {

        const { Slug } = covids.find((covids) => covids.ISO2 === e.target.value)
        console.log(Slug);
        getReportByCountry(Slug).then((res) => {
            console.log(res);
        })
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
