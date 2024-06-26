import Link from "next/link";
import Image from "next/image";
import { IMovie } from "@/types/movies";
import HeartFieldIcon from "./ui/HeartFieldIcon";

interface Props extends IMovie {
	favoriteMovies: IMovie[];
	addFavoriteMovie: (movie: IMovie) => void;
}

const MovieItem = (props: Props) => {
	const {
		kinopoiskId,
		year,
		nameRu,
		posterUrl,
		addFavoriteMovie,
		favoriteMovies,
	} = props;
	const newMovie = { ...props };

	const isLiked = favoriteMovies.some(
		(item) => item.kinopoiskId === kinopoiskId,
	);

	return (
		<li
			key={kinopoiskId}
			className="rounded-xl relative w-[250px] h-[350px] transition-all duration-300 hover:scale-110"
		>
			<Link href={`/movies/${kinopoiskId}`}>
				<Image
					src={posterUrl}
					alt={nameRu}
					fill
					className="rounded-[12px]"
				/>
				<button
					onClick={(e) => {
						addFavoriteMovie(newMovie);
						e.stopPropagation();
						e.preventDefault();
					}}
					disabled={isLiked}
					className="bg-gradient-to-r flex items-center rounded-lg justify-center size-[30px] from-white to-neutral-300 absolute right-[15px] top-[15px] group cursor-pointer"
				>
					<HeartFieldIcon
						className={`transition-all group-hover:scale-125 ${
							isLiked ? "text-red-600" : null
						}`}
					/>
				</button>
				<div className="flex flex-col items-start text-[15px] h-[100px] gap-[5px] opacity-95 rounded-b-xl absolute w-full text-start px-[10px] py-[15px] bottom-0 bg-gradient-to-r from-white to-neutral-300">
					<div className="font-bold">{nameRu}</div>
					<div className="font-medium mt-auto">{year}</div>
				</div>
			</Link>
		</li>
	);
};

export default MovieItem;
