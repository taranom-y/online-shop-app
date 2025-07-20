import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { useProductStore } from "@/store/ProducStore";
import useProducts from "@/hooks/useProducts";
import { useCartStore } from "@/store/CartStore";
import IsLoading from "@/app/Loading";

export default function ProductList() {
  const { isLoading, isError, error } = useProducts();

  const { products, search, category } = useProductStore((state) => state);
  const addToCart = useCartStore((state) => state.addItems);
  const filtered = products.filter((p) => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (isLoading) return <IsLoading />;

  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <section className="py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {filtered.map((product) => (
          <Card key={product.id} className="p-4 flex flex-col">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="h-40 w-full object-contain mb-4"
            />
            <CardContent className="flex-1">
              <h2 className="font-semibold text-lg ">{product.title}</h2>
              <p className="text-gray-600 ">${product.price}</p>
              <p className="text-xs text-muted-foreground">
                {product.category}
              </p>
            </CardContent>
            <Button className="mt-2" onClick={() => addToCart({ ...product })}>
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
