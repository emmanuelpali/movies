import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Movie from './Movie';



export default function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const apiKey = process.env.REACT_APP_RapidAPI;
    const options = {
        method: 'GET',
        url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/',
        headers: {
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
      };
      

    const  getMovies = async () => {
       try{
        const response = await axios.request(options)
        setMovies(response.data.results)
        console.log((response.data));
        }
       catch(err) {
        console.log(err);
       }
    }
     // Search functionality 
     useEffect(() => {        
            setMovies(movies.filter(movie => movie.title.toLowerCase().includes(searchTerm)));      
      }, [searchTerm]); 
      
      const clearSearch = () => {
        setSearchTerm(``);
        setMovies([]);
        getMovies();
      }

    return (
        <div className='container'>
          <h2 className='text-center m-5'>Popular Movies</h2>
          <button className='btn btn-outline-primary d-block mx-auto mb-3' onClick={getMovies}>Fetch Movies</button>
          <div className='text-center mx-auto mb-3 col-4'>
                <input className='form-control mb-3' type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className='btn btn-primary' type='button' onClick={clearSearch}>Clear</button>
            </div>
            <div className='row'>     
            {movies.map((movie) => (
                <Movie className="card" key={movie.imdb_id}  movie={movie}/>
            ))}
          </div>          
        </div>
      );
}
