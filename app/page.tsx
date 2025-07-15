"use client";
import FilteredProducts from "@/components/ui/filteredProducts";
import Header from "@/components/ui/header";

import ProductList from "@/components/ui/productList";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black shadow">
        <Header />
      </header>

      <main className="pt-16">
        <FilteredProducts />
        <ProductList />
      </main>
    </>
  );
}
