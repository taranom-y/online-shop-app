"use client";
import FilteredProducts from "@/components/ui/filteredProducts";

import ProductList from "@/components/ui/productList";

export default function Home() {
  return (
    <>
      <main className="pt-16 container flex flex-col  justify-center mx-auto">
        <FilteredProducts />
        <ProductList />
      </main>
    </>
  );
}
