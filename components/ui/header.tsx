"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import UserProfile from "./userProfile";
import { useCartStore } from "@/store/CartStore";

export default function Header() {
  const cartCount = useCartStore((state) => state.totalQuantity());
  return (
    <header className="w-full bg-dark shadow-sm border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <UserProfile />

        <div className="flex flex-col items-center justify-center">
          <Image
            src="/pink-moon.png"
            alt="Logo"
            className="w-8 h-8"
            width={200}
            height={200}
          />
          <span className="text-lg font-bold">Pink Moon</span>
        </div>

        <div>
          <Link href="/cartList">Cart</Link>
          <Button variant="ghost" className="relative p-0">
            <ShoppingCart className="w-6 h-6" />
            <Badge className="absolute -top-1 -right-2 text-xs px-1.5 py-0.5 rounded-full bg-red-500">
              {cartCount}
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
}
