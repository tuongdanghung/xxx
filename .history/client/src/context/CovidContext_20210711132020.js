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
    const [dispatch] = useReducer(covidReducer, {
        covid: null,
        covids: [],
        covidsLoading: true
    })
    const getCountries = async () => {

        try {
            const response = axios.get(`https://api.covid19api.com/countries`)
            if (response.data.success) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.posts })
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