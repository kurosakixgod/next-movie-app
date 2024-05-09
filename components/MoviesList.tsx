import { IMovies } from "@/types/movies";
import moviesRequests from "@/services/moviesRequests";
import MovieItem from "./MovieItem";

const MoviesList = async () => {
	const data: IMovies = await moviesRequests.getAllMovies();
	return (
		<ul className="flex flex-wrap justify-center gap-[50px] mt-[20px]">
			{data.items.map((item) => (
				<MovieItem key={item.kinopoiskId} {...item} />
			))}
		</ul>
	);
};

export default MoviesList;
