export interface ICeleb {
	kinopoiskId: number;
	nameRu: string;
	sex: string;
	posterUrl: string;
}

export interface ICelebs {
	items: ICeleb[];
	total: number;
}
