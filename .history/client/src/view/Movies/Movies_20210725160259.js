import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
import './movie.scss'
export const Movies = () => {
    const {
        moviesState: { movies },
        getPosts
    } = useContext(MoviesContext)
    console.log(movies);
    useEffect(() => getPosts(), [])
    return (
        <div>
            vlxx
        </div>
    )
}
