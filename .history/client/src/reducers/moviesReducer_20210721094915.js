import {
    POSTS_LOADED_SUCCESS,
    POSTS_LOADED_FAIL,
} from '../context/link'

export const moviesReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case POSTS_LOADED_SUCCESS:
            return {
                ...state,
                movies: payload,
            }

        case POSTS_LOADED_FAIL:
            return {
                ...state,
                movies: [],
            }
        default:
            return state
    }
}
