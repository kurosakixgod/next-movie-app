export interface IMovie {
	kinopoiskId: number;
	nameRu: string;
	ratingKinopoisk: number;
	year: number;
	posterUrl: string;
	posterUrlPreview: string;
	genres: IGenre[];
	countries: ICountry[];
	description: string;
}

interface ICountry {
	country: string;
}

interface IGenre {
	genre: string;
}

export interface IMovies {
	total: number;
	totalPages: number;
	items: IMovie[];
}

export interface ISimilarMovie {
	filmId: number;
	nameRu: string;
	posterUrl: string;
	posterUrlPreview: string;
}
