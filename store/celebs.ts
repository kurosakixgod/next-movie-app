import { ICeleb } from "@/types/celebs";
import { create } from "zustand";

interface CelebsState {
	celebs: ICeleb[];
	loading: boolean;
	error: boolean;
	setCelebs: (selebs: ICeleb[]) => void;
}

export const useCelebs = create<CelebsState>((set) => ({
	celebs: [],
	loading: false,
	error: false,
	setCelebs: (celebs) => set({ celebs }),
}));
