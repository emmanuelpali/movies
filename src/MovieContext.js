import React, { createContext, useState } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const apiKey = process.env.REACT_APP_RapidAPI;
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        params: {
          list: 'most_pop_movies',
          limit: '20'
        },
        headers: {
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
    const getMovies = async () => {
        
        try{
             const response = await axios.request(options)
             setMovies(response.data.results)
             }
            catch(err) {
             console.log(err);
            }
        }
    return (
        <MovieContext.Provider value={{ movies, setMovies, getMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;