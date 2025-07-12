"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import useProducts from "@/lib/hooks/useProducts";
import Image from "next/image";

export default function Home() {
  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((product) => (
              <Card key={product.id} className="p-4 flex flex-col">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="h-48 w-full object-contain mb-4"
                />
                <CardContent className="flex-1">
                  <h2 className="font-semibold text-lg mb-2">
                    {product.title}
                  </h2>
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
      </main>
    </>
  );
}
