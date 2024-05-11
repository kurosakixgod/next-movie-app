import { create } from "zustand";
import { IMovie } from "@/types/movies";
import { persist } from "zustand/middleware";

interface FavoriteState {
	favoriteMovies: IMovie[];
	addFavoriteMovie: (movies: IMovie) => void;
	removeFavoriteMovie: (id: number) => void;
}

export const useFavorite = create<FavoriteState>()(
	persist(
		(set, get) => ({
			favoriteMovies: [],
			addFavoriteMovie: (movie) =>
				set({ favoriteMovies: [...get().favoriteMovies, movie] }),
			removeFavoriteMovie: (id) =>
				set({
					favoriteMovies: [
						...get().favoriteMovies.filter(
							(movie) => movie.kinopoiskId !== id,
						),
					],
				}),
		}),
		{ name: "movies store" },
	),
);

interface A {
	foo: number;
	bar: number;
}
