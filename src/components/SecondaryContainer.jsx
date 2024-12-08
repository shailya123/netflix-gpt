import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies)
    return (
        movies.nowPlayingMovies && (
            <div className='bg-black'>
                <div className='-mt-20 relative z-50 pl-12'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
              
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                </div>
            </div>
        ))
}

export default SecondaryContainer
