import { IMovie, IMovies } from "@/types/movies";
import axios from "axios";

class MoviesRequests {
	async getAllMovies(search: string = "") {
		const { data } = await axios.get(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${search}`,
			{
				headers: {
					"X-API-KEY": "0e3a3cff-f024-41b6-9860-a89006e524ff",
					"Content-Type": "application/json",
				},
			},
		);
		const validData: IMovies = {
			items: data.items.filter((item: IMovie) => item.nameRu),
			total: data.total,
			totalPages: data.totalPages,
		};

		return validData;
	}

	async getSingleMovie(id: string) {
		const { data } = await axios.get(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
			{
				headers: {
					"X-API-KEY": "0e3a3cff-f024-41b6-9860-a89006e524ff",
					"Content-Type": "application/json",
				},
			},
		);
		return data;
	}

	async getSimilarMovies(id: string) {
		const { data } = await axios.get(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,
			{
				headers: {
					"X-API-KEY": "0e3a3cff-f024-41b6-9860-a89006e524ff",
					"Content-Type": "application/json",
				},
			},
		);
		return data;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MoviesRequests();
