import { create } from "zustand";
import { IMovie } from "@/types/movies";

interface MoviesState {
	movies: IMovie[];
	loading: boolean;
	error: boolean;
	setMovies: (movies: IMovie[]) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: boolean) => void;
}

export const useMovies = create<MoviesState>((set, get) => ({
	movies: [],
	loading: false,
	error: false,
	setMovies: (movies) => set({ movies }),
	setLoading: (loading) => set({ loading }),
	setError: (error) => set({ error }),
}));
