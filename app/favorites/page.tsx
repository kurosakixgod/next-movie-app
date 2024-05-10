"use client";

import { useFavorite } from "@/store/favorite";

export default function Favorites() {
	const favoriteMovies = useFavorite((state) => state.favoriteMovies);

	return (
		<h1>
			{favoriteMovies.map((item) => (
				<li key={item.kinopoiskId}>{item.nameRu}</li>
			))}
		</h1>
	);
}
