import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
import { AuthContext } from '../../context/AuthContext'
import Avatar from '@material-ui/core/Avatar';
import TransitionsModal from './modal/Movie'
import MovieDetail from './modal/Details'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import './movie.scss'
export const Movies = () => {
    const {
        authState: {
            user: { username }
        }
    } = useContext(AuthContext)
    const {
        moviesState: { movies },
        getMovies
    } = useContext(MoviesContext)
    useEffect(() => getMovies(), [])
    return (
        <div className="card-movie">
            {movies.map(movie => (
                <div key={movie._id} className="card-movie-item">
                    <div className="card-header">
                        <Avatar aria-label="recipe" className="">
                            {username}
                        </Avatar>
                        <div>
                            <span>{movie.title}</span>
                            <span>{movie.status}</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <img src={movie.images} />

                        <IconButton className="heart-icon">
                            <FavoriteIcon />
                        </IconButton>
                    </div>
                    <div className="card-footer">
                        <TransitionsModal url={movie.url} />
                        <MovieDetail description={movie.description} title={movie.title} />

                    </div>

                </div>
            ))}
        </div>
    )
}
