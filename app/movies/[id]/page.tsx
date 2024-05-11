import moviesRequests from "@/services/moviesRequests";
import {
	ISingleMovie,
	ISimilarMovie,
	IMovies,
	ISimilarMovies,
} from "@/types/movies";
import SingleMoviePage from "@/components/SingleMoviePage";
import SimilarMovie from "@/components/SimilarMovie";

interface Params {
	params: {
		id: string;
	};
}

const SingleMovie = async ({ params: { id } }: Params) => {
	const movie: ISingleMovie = await moviesRequests.getSingleMovie(id);
	const similarMovies: ISimilarMovies = await moviesRequests.getSimilarMovies(
		id,
	);
	console.log(similarMovies);

	return (
		<div className="flex flex-col gap-[50px] items-center">
			<div className="flex justify-center items-center">
				<SingleMoviePage {...movie} />
			</div>
			<h2 className="text-white">Похожие фильмы:</h2>
			<ul className="flex flex-wrap gap-[50px]">
				{similarMovies.items.length ? (
					similarMovies.items
						.slice(0, 3)
						.map((movie) => (
							<SimilarMovie key={movie.filmId} {...movie} />
						))
				) : (
					<div className="text-white self-start">
						Похожих фильмов нет
					</div>
				)}
			</ul>
		</div>
	);
};

export default SingleMovie;
