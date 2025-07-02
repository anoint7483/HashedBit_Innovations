import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <br /><br />
      <button onClick={() => navigate(`/book/${id}`)}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;
