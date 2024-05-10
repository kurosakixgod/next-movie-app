"use client";
import { useEffect } from "react";
import moviesRequests from "@/services/moviesRequests";
import MovieItem from "./MovieItem";
import { useMovies } from "@/store/movies";
import Search from "./Search";
import { useFavorite } from "@/store/favorite";

const MoviesList = () => {
	const { loading, error, movies, setMovies, setError, setLoading } =
		useMovies();
	const addFavoriteMovie = useFavorite((state) => state.addFavoriteMovie);
	console.log("render");

	useEffect(() => {
		const getMovies = async () => {
			try {
				setLoading(true);
				const data = await moviesRequests.getAllMovies();
				setMovies(data.items);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
				setError(true);
			}
		};
		getMovies();
	}, []);

	return (
		<div className="flex flex-col items-center">
			<Search />
			<ul className="flex flex-wrap justify-center gap-[50px] mt-[20px]">
				{loading && <div>Загрузка...</div>}
				{error && <div>Ошибка</div>}
				{movies &&
					movies.map((item) => (
						<MovieItem
							addFavoriteMovie={addFavoriteMovie}
							key={item.kinopoiskId}
							{...item}
						/>
					))}
				{!loading && !error && !movies.length && (
					<div>Не найдено таких фильмов</div>
				)}
			</ul>
		</div>
	);
};

export default MoviesList;

const SearchBar = () => {};
