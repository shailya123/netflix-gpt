import React from 'react';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlaying';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearch />) : (
        <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}
    </div>
  )
}

export default Browse;
