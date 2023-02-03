import {movies} from "./movies";

export const REMOVE_FAV = "KALDIR";
export const ADD_FAVORITES = "EKLE"; 

const initialState = {
    movies: movies,
    favorites: [],
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            let newMovie = action.payload;
            if (state.favorites.every((movie) => movie.id !== newMovie.id))
            return{
                ...state,
                favorites: [...state.favorites, newMovie],
                movies: [...state.movies.filter((movie) => movie.id !== newMovie.id )],
            };
            const newMovies = [...state.movies, newMovie];
            return {
                ...state,
                movies: newMovies,
            };
            case REMOVE_FAV:
                const newFavMovies = state.favorites.filter(
                    (favMovie) => action.payload !== favMovie.id
                );

                const favMovie = state.favorites.find(
                    (favMovie) => action.payload === favMovie.id
                );

                state.movies.push(favMovie);

                return {
                    ...state,
                    favorites: newFavMovies,
                };

            default:
                return state;
    }
};

export default myReducer;