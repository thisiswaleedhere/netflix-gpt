import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        newReleases: null,
        trendingNow: null,
        topRated: null,
        upcoming: null,
        movieInfo: null,
        movieTrailer: [],
    },
    reducers: {
        addNewReleases: (state, action) => {
            state.newReleases = action.payload;
        },

        addTrendingNow: (state, action) => {
            state.trendingNow = action.payload;
        },

        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },

        addUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },

        addMovieTrailer: (state, action) => {
            state.movieTrailer.push(action.payload);
        },

        addMovieInfo: (state, action) => {
            state.movieInfo = action.payload;
        }
    }
})

export const { addNewReleases, addTrendingNow, addTopRated, addUpcoming, addMovieTrailer, addMovieInfo } = movieSlice.actions;
export default movieSlice.reducer;