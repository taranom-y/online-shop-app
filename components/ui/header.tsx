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
    <header className="w-full bg-dark shadow-sm border-b fixed top-0 left-0  z-50 bg-black ">
      <div className="flex items-center justify-between px-4 py-3">
        <UserProfile />

        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <Image
              src="/pink-moon.png"
              alt="Logo"
              className="w-8 h-8 rounded-full"
              width={200}
              height={200}
            />
          </Link>
          <span className="text-lg font-bold">Pink Moon</span>
        </div>

        <div>
          <Link href="/cartList">
            Cart
            <Button variant="ghost" className="relative p-0">
              <ShoppingCart className="w-6 h-6" />
              <Badge className="absolute -top-1 -right-2 text-xs px-1.5 py-0.5 rounded-full bg-red-500">
                {cartCount}
              </Badge>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
