import axios from 'axios'
import { createContext, useReducer, useState } from 'react'
import { covidReducer } from '../reducers/covidReducer'
import {
    POSTS_LOADED_FAIL,
    POSTS_LOADED_SUCCESS,
    DETAIL_POST,
    DETAIL_POST_FAIL
} from './link'
export const CovidContext = createContext()

const CovidContextProvider = ({ children }) => {

    // state
    const [covidState, dispatch] = useReducer(covidReducer, {
        covids: [],
        countryDetails: []
    })

    const getCountries = async () => {
        try {
            const response = await axios.get('https://api.covid19api.com/countries');
            // console.log(response.data);
            if (response.data) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }
    // 
    const getReportByCountry = async (country) => {
        // const response = await axios.get(`https://api.covid19api.com/dayone/country/${country}`)
        // console.log(response);
        try {
            const response = await axios.get(`https://api.covid19api.com/dayone/country/${country}`)

            if (response.data)
                dispatch({ type: DETAIL_POST, payload: country.data })
            console.log(response.data);
        } catch (error) {
            dispatch({ type: DETAIL_POST_FAIL })
        }
    }

    // Post context data
    const covidContextData = {
        covidState,
        getCountries,
        getReportByCountry
    }

    return (
        <CovidContext.Provider value={covidContextData}>
            {children}
        </CovidContext.Provider>
    )
}
export default CovidContextProvider