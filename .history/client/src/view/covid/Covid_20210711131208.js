import { useEffect, useContext } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'

const Covid = () => {



    useEffect(() => {

    }, [])



    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country />
        </div>
    )
}

export default Covid
