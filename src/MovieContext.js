import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const apiKey = process.env.REACT_APP_RapidAPI;
      const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        params: {
          year: '2023'
        },
        headers: {
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      const searchOptions = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchTerm}`,
        params: {
          exact: 'false',
          titleType: 'movie',
          startYear: '1500',
          endYear: '2024'
        },
        headers: {
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
    useEffect(() => {
        getMovies();
    }, [])
    const getMovies = async () => {
      try{
           const response = await axios.request(options)
           setMovies(response.data.results)
           }
          catch(err) {
           console.log(err);
          }
      }
      const searchMovies = async() =>{
        try{
          const response = await axios.request(searchOptions)
          setMovies(response.data.results)
          }
         catch(err) {
          console.log(err);
         }
      }
   
    return (
        <MovieContext.Provider value={{ movies, setMovies, getMovies, searchTerm, setSearchTerm, searchMovies}}>
            {children}
        </MovieContext.Provider>
  );
};

export default MovieContextProvider;