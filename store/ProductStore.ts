import { create } from "zustand";

type ProductStore = {
  search: string;
  category: string;
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  search: "",
  category: "all",
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
}));
