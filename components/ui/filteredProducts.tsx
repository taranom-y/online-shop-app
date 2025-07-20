import { useProductStore } from "@/store/ProductStore";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export default function FilteredProducts() {
  const { category, search, setSearch, setCategory } = useProductStore(
    (state) => state
  );
  return (
    <section className="w-full mt-15 flex flex-col md:flex-row gap-4 justify-items-start  ">
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-4/12"
      />

      <Select onValueChange={setCategory} value={category}>
        <SelectTrigger className=" w-full md:w-3/12">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="jewelery">Jewelery</SelectItem>
          <SelectItem value="men's clothing">Men&apos;s Clothing</SelectItem>
          <SelectItem value="women's clothing">
            Women&apos;s Clothing
          </SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
}
