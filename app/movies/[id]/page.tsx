import moviesRequests from "@/services/moviesRequests";
import { IMovie, ISimilarMovie } from "@/types/movies";
import SingleMoviePage from "@/components/SingleMoviePage";
import SimilarMovie from "@/components/SimilarMovie";

interface Params {
	params: {
		id: string;
	};
}

const SingleMovie = async ({ params: { id } }: Params) => {
	const movie: IMovie = await moviesRequests.getSingleMovie(id);
	const similarMovies = await moviesRequests.getSimilarMovies(id);
	console.log(similarMovies);

	return (
		<>
			<div className="flex justify-center">
				<SingleMoviePage {...movie} />
			</div>
			<ul>
				{similarMovies &&
					similarMovies.items.map((movie: ISimilarMovie) => (
						<SimilarMovie key={movie.filmId} {...movie} />
					))}
			</ul>
		</>
	);
};

export default SingleMovie;
