"use client";

import { useFavorite } from "@/store/favorite";
import FavoriteItem from "@/components/FavoriteItem";

import { usePathname } from "next/navigation";

export default function Favorites() {
	const { favoriteMovies, removeFavoriteMovie } = useFavorite();
	const pathname = usePathname().slice(1);
	const validPathname = pathname[0].toUpperCase() + pathname.slice(1);

	return (
		<>
			<h1 className="text-white">{validPathname}:</h1>
			<div className="flex justify-start">
				<ul className="flex flex-wrap gap-[50px]">
					{favoriteMovies.map((item) => (
						<FavoriteItem
							removeFavoriteMovie={removeFavoriteMovie}
							key={item.kinopoiskId}
							{...item}
						/>
					))}
				</ul>
			</div>
		</>
	);
}
