import { useProductStore } from "@/store/productStore";
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
    <section>
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Select onValueChange={setCategory} value={category}>
        <SelectTrigger className="w-[180px]">
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
