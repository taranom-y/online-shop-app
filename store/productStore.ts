import { Product } from '@/lib/hooks/useProducts';
import { create } from 'zustand'


type ProductStore ={
  products: Product[];
  search: string;
  category: string;
  setProducts: (products: Product[]) => void;
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;

};


export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  search:"",
  category:"all",
  setProducts: (products) => set({ products }),
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  
}));