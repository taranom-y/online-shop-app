"use client";
import FilteredProducts from "@/components/ui/filteredProducts";

import ProductList from "@/components/ui/productList";

export default function Home() {
  return (
    <>
      <main className="pt-16 flex flex-col justify-center px-[24px] md:px-[64px] ">
        <FilteredProducts />
        <ProductList />
      </main>
    </>
  );
}
