import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchMovieList: null,
    gptMoviesName: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMovies: (state, action) => {
      const { moveiNames, movieResults } = action.payload;
      state.gptSearchMovieList = movieResults;
      state.gptMoviesName = moveiNames;
    },
  },
});

export const { toggleGptSearchView, addGptSearchMovies } = gptSlice.actions;

export default gptSlice.reducer;
