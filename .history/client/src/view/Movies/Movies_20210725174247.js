import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TransitionsModal from './modal/Movie'
import MovieDetail from './modal/Details'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import './movie.scss'
export const Movies = () => {
    const {
        moviesState: { movies },
        getMovies
    } = useContext(MoviesContext)
    console.log(movies);
    useEffect(() => getMovies(), [])
    return (
        <div className="card-movie">
            {movies.map(movie => (
                <div key={movie._id} className="card-movie-item">
                    <div className="card-header">
                        <Avatar aria-label="recipe" className="">
                            R
                        </Avatar>
                        <div>
                            <span>name</span>
                            <span>time</span>
                            <span>danh gia</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <img src="https://bloganchoi.com/wp-content/uploads/2020/07/kem-hiep.jpg" />
                        <IconButton className="heart-icon">
                            <FavoriteIcon />
                        </IconButton>
                    </div>
                    <div className="card-footer">
                        <TransitionsModal />
                        <MovieDetail />
                    </div>
                </div>
            ))}
        </div>
    )
}
