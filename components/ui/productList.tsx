import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./card";
import { Button } from "./button";
import { useProductStore } from "@/store/ProductStore";
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
          <Card key={product.id}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="h-40 w-full object-contain mb-4"
            />
            <CardContent className="flex-1">
              <CardTitle className="text-lg ">{product.title}</CardTitle>

              <CardDescription className="line-clamp-5 ">
                {product.description}
              </CardDescription>
              <p className="text-gray-700 font-bold mt-2">${product.price}</p>
              <p className="">{product.category}</p>
            </CardContent>

            <Button
              onClick={() => addToCart({ ...product })}
              className="mx-8 bg-gray-700"
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
