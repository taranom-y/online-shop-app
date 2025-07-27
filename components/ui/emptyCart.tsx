import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Your cart is empty
      </h2>
      <p className="text-gray-500 dark:text-gray-200 mt-2">
        Please add some products to your cart.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-gray-700 dark:bg-gray-500 text-white rounded-2xl shadow hover:bg-gray-400 transition"
      >
        Go Shopping
      </Link>
    </div>
  );
}
