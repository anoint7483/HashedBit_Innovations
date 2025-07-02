import React from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../data/movies';
import './styles.css';

function MovieGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <img src={movie.image} alt={movie.title} />
          <h4>{movie.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
