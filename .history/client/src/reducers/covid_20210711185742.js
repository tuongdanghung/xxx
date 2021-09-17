import {
    POSTS_LOADED_SUCCESS,
    POSTS_LOADED_FAIL,
    FIND_POST
} from '../context/link'
export const covidReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case POSTS_LOADED_SUCCESS:
            return {
                ...state,
                covids: payload,
            }

        case POSTS_LOADED_FAIL:
            return {
                ...state,
                covids: [],
            }
        case FIND_POST:
            return { ...state, covids: payload }
        default:
            return state
    }
}