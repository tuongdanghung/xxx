import { useEffect, useContext } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'

const Covid = () => {

    // context
    const {
        covidState: { covid, covids, covidsLoading },
        getCountries,
    } = useContext(CovidContext)

    useEffect(() => getCountries(), [])



    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country />
        </div>
    )
}

export default Covid
