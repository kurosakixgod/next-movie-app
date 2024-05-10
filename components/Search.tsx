"use client";
import { ChangeEvent, FormEvent } from "react";

import moviesRequests from "@/services/moviesRequests";
import Loupe from "./ui/Loupe";
import { useSearch } from "@/store/useSearch";
import { useMovies } from "@/store/movies";

const Search = () => {
	const { search, setSearch } = useSearch();
	const setMovies = useMovies((state) => state.setMovies);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		moviesRequests
			.getAllMovies(search)
			.then((data) => setMovies(data.items));
		setSearch("");
	};

	return (
		<form
			className="flex items-center bg-white px-[10px] rounded-xl transition-all focus-within:scale-110"
			onSubmit={handleSubmit}
		>
			<input
				className="h-[40px] w-[300px] focus:outline-none"
				placeholder="Введите название фильма"
				onChange={handleChange}
				type="text"
			/>
			<button>
				<Loupe />
			</button>
		</form>
	);
};

export default Search;
