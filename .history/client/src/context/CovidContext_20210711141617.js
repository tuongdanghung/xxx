import axios from 'axios'
import { createContext, useReducer, useState } from 'react'
import { covidReducer } from '../reducers/covid'
import {
    POSTS_LOADED_FAIL,
    POSTS_LOADED_SUCCESS,
} from './link'
export const CovidContext = createContext()

const CovidContextProvider = ({ children }) => {

    // state
    const [covidState, dispatch] = useReducer(covidReducer, {
        covids: [],
    })
    const getCountries = async () => {

        try {
            const response = axios.get(`https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST?fbclid=IwAR0pZCn_ZSkm_zResCxeQF_vk2QI8c5poQsASjvGM97t-8vs-Qh0AW92jqc`)
            // console.log(response);
            if (response.data.success) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.covids })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }

    // Post context data
    const covidContextData = {
        covidState,
        getCountries
    }

    return (
        <CovidContext.Provider value={covidContextData}>
            {children}
        </CovidContext.Provider>
    )
}
export default CovidContextProvider