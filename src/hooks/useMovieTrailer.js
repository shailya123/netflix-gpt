import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = ( movieId ) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  const dispatch = useDispatch();
  const getMoviesTrailer = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((x) => x.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesTrailer();
  }, []);
};

export default useMovieTrailer;
