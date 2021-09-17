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
                    <div>
                        <span>name</span>
                        <span>time</span>
                    </div>
                </div>
                <div className="card-body">
                    <a href="https://www.youtube.com/"> <img src="https://bloganchoi.com/wp-content/uploads/2020/07/kem-hiep.jpg" /></a>
                </div>
                <div className="card-footer">
                    <Button variant="contained" disabled>xem phim</Button>
                    <Button variant="contained" disabled>Chi tiết</Button>
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
