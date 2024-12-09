import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMoviesUser } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
const dispatch=useDispatch();
const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
const getNowPlayingMovies=async ()=>{
    const data =await fetch(url,API_OPTIONS)
    const json=await data.json();
    dispatch(addNowPlayingMoviesUser(json.results));
}


useEffect(()=>{
    getNowPlayingMovies();
},[])
}

export default useNowPlayingMovies;