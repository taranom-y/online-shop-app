"use client";
import FilteredProducts from "@/components/ui/filteredProducts";

import ProductList from "@/components/ui/productList";

export default function Home() {
  return (
    <>
      <main>
        <FilteredProducts />
        <ProductList />
      </main>
    </>
  );
}
