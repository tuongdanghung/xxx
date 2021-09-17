import { useEffect, useContext, useState } from 'react'
import { getCountries } from '../../context/CovidContext';
import { Country } from './country/Country'
const Covid = () => {

    // context
    // const {
    //     covidState: { covids },
    //     getCountries,
    // } = useContext(CovidContext)
    // console.log(covids)
    // // 
    // const [countries, setCountries] = useState([])
    // // 
    useEffect(() => {
        getCountries().then(res => {
            console.log(res);
        })
    }, [])
    // 

    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country />
        </div>
    )
}

export default Covid
