import React from 'react'
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <div className='card-dark col-md-4 my-5  shadow border-bottom'>
        <h3>{movie.title}</h3>
        <p>Liked by <em>{movie.popularity}</em> people</p>
        <Link to={`/movie/${movie.imdb_id}`}>
        <h4 className='btn'>Movie Details</h4>
        </Link>        
    </div>
  )
}
