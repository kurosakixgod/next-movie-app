export interface IMovie {
	kinopoiskId: number;
	nameRu: string;
	ratingKinopoisk: number;
	year: number;
	posterUrl: string;
	posterUrlPreview?: string;
}

export interface ISingleMovie extends IMovie {
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

export interface ISimilarMovies
	extends Omit<IMovies<ISimilarMovie>, "totalPages"> {}

export interface IMovies<T> {
	total: number;
	totalPages: number;
	items: T[];
}

export interface ISimilarMovie extends Omit<IMovie, "kinopoiskId"> {
	filmId: number;
}
