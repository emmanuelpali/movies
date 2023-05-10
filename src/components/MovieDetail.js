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
    url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`,
    headers: {
      'X-RapidAPI-Key': `${apiKey}`,
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.request(options);
      setMovie(response.data.results);
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <div className='loader_container'><span className='loader'></span></div>;
  }

  return (
    <div className='container-fluid row col-md-8 mx-auto mt-4 single_movie'>
      <h1 className='card-title text-center my-5'>{movie.title}</h1>
      <div className="single_image_container">
        <img className='card-img-top col-md-4' src={movie.image_url} alt={movie.title} />
      </div>
      <div className='card-body large-shadow col-md-6'>
      <h2 className='card-text '>Description</h2>
      <p className='card-text lh-base'>{movie.description}</p>
      <p className='card-text'>Release Year: {movie.year}</p>
      <p className='card-text'>Rating: {movie.rating}</p>
      <Link className='btn btn-outline-primary col-md-3' to="/">Home</Link>
      </div>
    </div>
  );
}
