import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const apiKey = process.env.REACT_APP_RapidAPI;
const {id} = useParams();

const options = {
  method: 'GET',
  url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
  params: {info: 'base_info'},
  headers: {
    'X-RapidAPI-Key': `${apiKey}`,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.request(options);
      setMovie(response.data.results);
      console.log(movie);
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <div className='loader_container'><span className='loader'></span></div>;
  }
  if (movie.length === 0) {
    return <div className='container-fluid row col-md-8 mx-auto my-5'>
        <h3>Sorry can't find movie details at the moment</h3>
        <Link className='btn btn-outline-primary col-md-3 my-3' to="/">Return Home</Link>
      </div>;
  }
  else{
  return (
      <div className='container-fluid row col-md-8 mx-auto mt-4 single_movie'>
      {movie.originalTitleText && <h1 className='text-center mt-2'>{movie.originalTitleText.text}</h1>}
      <div className="single_image_container mx-auto">
        <img className='card-img-top col-md-4' src={movie.primaryImage.url} alt={movie.primaryImage.caption.plainText} />
      </div>
      <div className='card-body large-shadow col-md-6'>
      <h2 className='card-text '>Plot</h2>
      <p className='card-text lh-base'>{movie.plot.plotText.plainText}</p>
      <p className='card-text'>Release Year: {movie.releaseYear.year}</p>
      {movie.ratingsSummary.aggregateRating && <p className='card-text'>Rating: {movie.ratingsSummary.aggregateRating}</p> }
      <Link className='btn btn-outline-primary col-md-3' to="/">Home</Link>
      </div>
    </div>
  );
}}
