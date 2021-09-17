import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
export const Movies = () => {
    const {
        covidState: { movies },
        getPosts
    } = useContext(MoviesContext)
    return (
        <div>
            vlxx
        </div>
    )
}
