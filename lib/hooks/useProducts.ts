import { useQuery } from "@tanstack/react-query";

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}


export default function useProducts(){

    return useQuery<Product[]>(
        {
        queryKey: ["products"],
        refetchOnWindowFocus: false,
        queryFn: async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
        throw new Error("Network response was not ok");
        }
        return res.json();
        }
})
}