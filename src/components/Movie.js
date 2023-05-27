import React from 'react'
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <>
      <div className='my_card large-shadow card-dark align-center col-md-4 my-5 mx-5 p-5'>
        <div className="image_container mx-auto">
        {movie.primaryImage ? <img className='card-img-top' src={movie.primaryImage.url} alt={movie.titleText.text} />: movie.titleText.text}
        </div>
        {movie.originalTitleText && <p className='text-center mt-2'>{movie.originalTitleText.text}</p>}
        {movie.releaseYear && <p className='text-center mt-2'>Release Year: <em>{movie.releaseYear.year}</em></p>}
        <Link className='text-decoration-none' to={`/movie/${movie.id}`}>
        <span className='btn d-block col-5 mx-auto my-3'>Details</span>
        </Link>        
      </div>
    </>
  )
}
