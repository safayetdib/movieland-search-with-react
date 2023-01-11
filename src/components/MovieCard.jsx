import React from 'react';

const MovieCard = ({ movie }) => {
	return (
		<div className="movie-card">
			<div className="movie-year">
				<p>{movie.Year}</p>
			</div>
			<div className="movie-poster">
				<img
					src={
						movie.Poster !== 'N/A'
							? movie.Poster
							: `https://via.placeholder.com/400`
					}
					alt={movie.Title}
				/>
			</div>
			<div className="movie-title">
				<span>{movie.Type}</span>
				<h3>{movie.Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
