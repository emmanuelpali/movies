
import React, { useState, useEffect, useContext } from 'react'
import Movie from './Movie';
// using context to persist data
import { MovieContext } from '../MovieContext';

export default function Home() {
    const {movies, setMovies, getMovies} = useContext(MovieContext);
    const [searchTerm, setSearchTerm] = useState('');
     useEffect(() => {        
            if(searchTerm !== ''){
              setMovies((movies) => movies.filter((movie) => movie.titleText.text.toLowerCase().includes(searchTerm.toLowerCase()))); 
            }     
      }, [searchTerm]); 
      
      const clearSearch = () => {
        setSearchTerm(``);
        getMovies();
      }

    return (
        <div className='container-fluid'>
          <h1 className='text-center m-5'>Popular Movies</h1>
          <button className='btn btn-outline-primary d-block mx-auto mb-3' onClick={getMovies}>Fetch Movies</button>
          <div className='mx-auto mb-3 col-6 d-flex justify-content-center'>
                <input className='form-control mb-3 col-6' type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className='btn btn-primary h-50 d-inline-block col-md-2 ms-2' type='button' onClick={clearSearch}>Clear</button>
            </div>
            {<div className='row main mx-auto'>     
            {searchTerm !== '' && movies.length === 0 ? <h3>Sorry, no match found</h3> : (
              movies.map((movie) => (
                <Movie key={movie.id} className='mx-auto' movie={movie}/>
            ))
            )}
          </div>}          
        </div>
      );
}
