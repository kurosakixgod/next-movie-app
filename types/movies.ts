export interface IMovie {
	kinopoiskId: number;
	nameRu: string;
	ratingKinopoisk: number;
	year: number;
	posterUrl: string;
	posterUrlPreview: string;
	genres: Genre[];
	countries: Country[];
	description: string;
}

interface Country {
	country: string;
}

interface Genre {
	genre: string;
}

export interface IMovies {
	total: number;
	totalPages: number;
	items: IMovie[];
}
