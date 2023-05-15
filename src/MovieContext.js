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
        year: '2022',
        endYear: '2023'
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
             console.log(movies);
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