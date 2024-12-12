import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-6 text-white py-2'>
            <h1 className='font-semibold text-xl md:text-3xl  py-4'>{title}</h1>
            <div className='flex overflow-x-auto'>
                <div className='flex'>
                    {movies?.map(movie => (<MovieCard key={movie.id} posterPath={movie.poster_path} />))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
