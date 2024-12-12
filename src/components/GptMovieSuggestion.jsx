import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const { gptSearchMovieList, gptMoviesName } = useSelector(store => store.gpt);
    if (!gptMoviesName) return null;

    return (
        <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
            <div>
                <h1>
                    {gptMoviesName[0]}
                </h1>
                {gptMoviesName.map((movie, index) => (<MovieList title={movie} movies={gptSearchMovieList[index]} />))}
            </div>
        </div>
    )
}

export default GptMovieSuggestion
