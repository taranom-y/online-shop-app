import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { useProductStore } from "@/store/productStore";
import useProducts from "@/lib/hooks/useProducts";

export default function ProductList() {
  const { isLoading, isError, error } = useProducts();

  const { products, search, category } = useProductStore((state) => state);

  const filtered = products.filter((p) => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <Card key={product.id} className="p-4 flex flex-col">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="h-48 w-full object-contain mb-4"
            />
            <CardContent className="flex-1">
              <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-xs text-muted-foreground">
                {product.category}
              </p>
            </CardContent>
            <Button className="mt-4">Add to Cart</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
