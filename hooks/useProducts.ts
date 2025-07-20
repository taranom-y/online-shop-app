import { useProductStore } from "@/store/ProductStore";
import { useQuery } from "@tanstack/react-query";


export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
}


export default function useProducts(){
    const setProducts = useProductStore((state) => state.setProducts);
    return useQuery<Product[]>(
        {
        queryKey: ["products"],
        queryFn: async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Network response was not ok");
        const data= await res.json();
        setProducts(data);
        return data;
        },
        staleTime: Infinity,
        refetchOnWindowFocus: false,

       
});
}
