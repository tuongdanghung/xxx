import { useEffect, useContext } from 'react'
import { CovidContext } from '../../context/CovidContext';
import { Country } from './country/Country'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'
const Covid = () => {

    // context
    const {
        covidState: { covids },
        getCountries,
    } = useContext(CovidContext)
    console.log(covids);
    useEffect(() => getCountries(), [])

    return (
        <div>
            <h1>Số liệu Covid-19</h1>
            <Country />
        </div>
    )
}

export default Covid
