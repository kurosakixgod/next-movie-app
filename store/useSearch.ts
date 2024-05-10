import { create } from "zustand";

interface SearchState {
	search: string;
	setSearch: (search: string) => void;
}

export const useSearch = create<SearchState>((set, get) => ({
	search: "",
	setSearch: (search) => set({ search }),
}));
