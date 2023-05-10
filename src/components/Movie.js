import React from 'react'
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <div className='large-shadow card-dark col-md-4 m-5'>
        <h2>{movie.title}</h2>
        <p>Liked by <em>{movie.popularity}</em> people</p>
        <Link to={`/movie/${movie.imdb_id}`}>
        <h4 className='btn'>Movie Details</h4>
        </Link>        
    </div>
  )
}
