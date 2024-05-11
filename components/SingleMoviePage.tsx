import { ISingleMovie } from "@/types/movies";
import Image from "next/image";
import Link from "next/link";

const SingleMovie = ({
	nameRu,
	posterUrl,
	description,
	genres,
	countries,
}: ISingleMovie) => {
	return (
		<div className="flex gap-[30px] w-[1000px]">
			<Image
				src={posterUrl}
				alt={nameRu}
				width={300}
				height={300}
				className="rounded-2xl"
			/>
			<div className="flex flex-col">
				<div className="text-3xl font-bold text-white">{nameRu}</div>
				<p className="text-white mt-[10px] font-medium text-md">
					{description ?? "Описание отсутсвует"}
				</p>
				<div className="flex gap-[40px] text-white mt-[20px]">
					<ul>
						Жанры:{" "}
						{genres.map(({ genre }) => (
							<li key={genre}> - {genre}</li>
						))}
					</ul>
					<ul>
						Страны:{" "}
						{countries.map(({ country }) => (
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
	);
};

export default SingleMovie;
