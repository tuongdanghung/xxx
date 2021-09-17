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
                    <div>
                        <span>name</span>
                        <span>time</span>
                    </div>
                </div>
                <div className="card-body">
                    <img src="https://bloganchoi.com/wp-content/uploads/2020/07/kem-hiep.jpg" />
                    <FavoriteIcon className="heart-icon" />
                </div>
                <div className="card-footer">
                    <TransitionsModal />
                    <MovieDetail />
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
