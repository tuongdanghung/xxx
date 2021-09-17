import { useEffect } from 'react'
import { Country } from './country/Country'
import { getCountries } from '../../context/Covid'
const Covid = () => {



    useEffect(() => {
        getCountries()
    }, [])



    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country />
        </div>
    )
}

export default Covid
