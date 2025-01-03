import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
  nowPlayingMovies:null,
  trailer:null,
  popularMovies:null
  },
  reducers: {
    addNowPlayingMoviesUser: (state, action) => {
      state.nowPlayingMovies=action.payload;
    },
    addPopularMovies: (state, action) => {
        state.popularMovies=action.payload;
      },
    addTrailerVideo: (state, action) => {
        state.trailer=action.payload;
      }
  },
});

export const {addNowPlayingMoviesUser,addTrailerVideo,addPopularMovies}=moviesSlice.actions;

export default moviesSlice.reducer;