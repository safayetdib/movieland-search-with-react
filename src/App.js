import React, { useEffect, useState } from 'react';
import './styles/App.css';
import MovieCard from './components/MovieCard';
import SearchIcon from './assets/search.svg';
import Logo from './assets/logo.gif';

// OMDB key: 9278ab0b
const API_URL = `https://www.omdbapi.com/?apikey=9278ab0b`;

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}&plot=short`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies('Toy Story');
	}, []);

	return (
		<div className="app">
			{/* ========Header Section======== */}
			<div className="logo">
				<img src={Logo} alt="logo" width="40" height="40" />
				<h1>MovieLand</h1>
			</div>
			<div className="search-bar">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyDown={(e) => e?.key === 'Enter' && searchMovies(searchTerm)}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>
			{/* =======Movie Cards Container======= */}
			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((movie, index) => (
						<MovieCard movie={movie} key={index} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
