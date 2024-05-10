import Image from "next/image";
import Link from "next/link";
import { ISimilarMovie } from "@/types/movies";

const SimilarMovie = ({ nameRu, filmId, posterUrl }: ISimilarMovie) => {
	return (
		<li
			key={filmId}
			className="rounded-xl relative w-[250px] h-[250px] transition-all duration-300 hover:scale-110"
		>
			<Link href={`/movies/${filmId}`}>
				<Image
					src={posterUrl}
					alt={nameRu}
					fill
					className="rounded-[12px]"
				/>
				<div className="flex flex-col items-start text-[15px] h-[100px] gap-[5px] opacity-95 rounded-b-xl absolute w-full text-start px-[10px] py-[15px] bottom-0 bg-gradient-to-r from-white to-neutral-300">
					<div className="font-bold">{nameRu}</div>
				</div>
			</Link>
		</li>
	);
};

export default SimilarMovie;
