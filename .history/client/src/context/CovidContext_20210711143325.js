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
            const response = await axios.get('https://api.covid19api.com/countries');
            console.log(response);
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