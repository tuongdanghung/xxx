import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import './movie.scss'
export const Movies = () => {
    const {
        moviesState: { movies },
        getPosts
    } = useContext(MoviesContext)
    console.log(movies);
    useEffect(() => getPosts(), [])
    return (
        <div className="card-movie">
            <div className="card-movie-item">
                <div className="card-header">
                    <Avatar aria-label="recipe" className="">
                        R
                    </Avatar>
                </div>
                <div className="card-body">body</div>
                <div className="card-footer">
                    <button variant="contained" disabled>xem phim</button>
                </div>
            </div>
            <div className="card-movie-item">
                <div className="card-header"> header</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
            <div className="card-movie-item">
                <div className="card-header"> header</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
            <div className="card-movie-item">
                <div className="card-header"> header</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
            <div className="card-movie-item">
                <div className="card-header"> header</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
        </div>
    )
}
