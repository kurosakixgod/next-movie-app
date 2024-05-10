import { create } from "zustand";
import { IMovie } from "@/types/movies";
import { persist } from "zustand/middleware";

interface FavoriteState {
	favoriteMovies: IMovie[];
	addFavoriteMovie: (movies: IMovie) => void;
}

export const useFavorite = create<FavoriteState>()(
	persist(
		(set, get) => ({
			favoriteMovies: [],
			addFavoriteMovie: (movie) =>
				set({ favoriteMovies: [...get().favoriteMovies, movie] }),
		}),
		{ name: "movies store" },
	),
);

interface A {
	foo: number;
	bar: number;
}
