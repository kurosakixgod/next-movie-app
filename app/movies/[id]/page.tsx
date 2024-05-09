import Link from "next/link";
import moviesRequests from "@/services/moviesRequests";
import { IMovie } from "@/types/movies";
import Image from "next/image";

interface Params {
	params: {
		id: string;
	};
}

const SingleMovie = async ({ params: { id } }: Params) => {
	const movie: IMovie = await moviesRequests.getSingleMovie(id);
	console.log(movie);

	return (
		<>
			<div className="flex justify-center">
				<div className="flex gap-[30px] w-[1000px]">
					<Image
						src={movie.posterUrl}
						alt={movie.nameRu}
						width={300}
						height={300}
						className="rounded-2xl"
					/>
					<div className="flex flex-col">
						<div className="text-3xl font-bold text-white">
							{movie.nameRu}
						</div>
						<p className="text-white mt-[10px] font-medium text-md">
							{movie.description}
						</p>
						<div className="flex gap-[40px] text-white mt-[20px]">
							<ul>
								Жанры:{" "}
								{movie.genres.map(({ genre }) => (
									<li key={genre}> - {genre}</li>
								))}
							</ul>
							<ul>
								Страны:{" "}
								{movie.countries.map(({ country }) => (
									<li key={country}> - {country}</li>
								))}
							</ul>
						</div>
						<Link
							className="font-bold text-white ml-auto mt-auto p-[10px] transition-all rounded-md hover:bg-neutral-600"
							href="/movies "
						>
							Вернуться назад
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleMovie;
