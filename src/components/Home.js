
import React, { useEffect, useContext } from 'react'
import Movie from './Movie';
import { motion, useScroll } from "framer-motion";
// using context to persist fetched movies
import { MovieContext } from '../MovieContext';

export default function Home() {
  const { scrollYProgress } = useScroll();
    const {movies,  getMovies, searchTerm, setSearchTerm, searchMovies} = useContext(MovieContext);
     
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm !== '') {
        searchMovies();
      } else {
        getMovies();
      }
    }, 1000);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);
      
      const clearSearch = () => {
        setSearchTerm(``);
        getMovies();
      }
      if (!movies) {
        return <div className='loader_container'><span className='loader'></span></div>;
      }

    return (
      <>
        <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
        <div className='container-fluid'>
          
          <h1 className='text-center m-5'>Recent Movies</h1>
          <button className='btn d-block mx-auto mb-3' onClick={getMovies}>Fetch Movies</button>
          <div className='mx-auto mb-3 col-6 d-flex justify-content-center'>
                <input className='form-control mb-3 col-6' type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <a className='btn btn-primary h-50 d-inline-block col-md-2 ms-2' type='a' onClick={clearSearch}>Clear</a>
            </div>
            {<div className='row main mx-auto'>     
            {searchTerm !== '' && movies.length === 0 ? <h3>Sorry, no match found</h3> : (
              movies.map((movie) => (
                <Movie key={movie.id} className='mx-auto' movie={movie}/>
            ))
            )}
          </div>}          
        </div>
        </>
      );
}
