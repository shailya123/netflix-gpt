import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMoviesUser, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
const dispatch=useDispatch();
const url = 'https://api.themoviedb.org/3/movie/popular?page=1';
const getPopularMovies=async ()=>{
    const data =await fetch(url,API_OPTIONS)
    const json=await data.json();
    console.log(json,"json");
    dispatch(addPopularMovies(json.results));
}


useEffect(()=>{
    getPopularMovies();
},[])
}

export default usePopularMovies;