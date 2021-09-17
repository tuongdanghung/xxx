import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
export const Movies = () => {
    const {
        MoviesState: { movies },
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
