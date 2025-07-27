"use client";
import React from "react";
import { useCartStore } from "@/store/CartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import EmptyCart from "@/components/ui/emptyCart";
export default function CartListPage() {
  const { items, incrementItem, decrementItem, removeItem, totalPrice } =
    useCartStore();
  if (items.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <div className="overflow-x-auto mx-8 mt-25 ">
        <table className="w-full  rounded-2xl  overflow-hidden  ">
          <thead className="bg-gray-300 text-center dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-4 ">Number</th>
              <th className="p-4 ">Title</th>
              <th className="p-4 ">Description</th>
              <th className="p-4 ">Quantity</th>
              <th className="p-4 ">Price</th>
              <th className="p-4 ">Total </th>
              <th className="p-4 "> </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200 dark:bg-gray-600">
            {items.map((item, index) => (
              <tr key={item.id} className="text-sm">
                <td className="p-4 text-center text-lg">{index + 1}</td>
                <td className="p-4 text-base font-bold">{item.title}</td>
                <td className="p-4 text-base">{item.description}</td>
                <td className="p-4 text-nowrap">
                  <button
                    onClick={() => decrementItem(item.id)}
                    className="p-1 mr-2 rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-colors  dark:bg-gray-900"
                  >
                    <Minus size={14} />
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => incrementItem(item.id)}
                    className="p-1 ml-2 rounded-full bg-gray-500  text-white hover:bg-gray-600 transition-colors  dark:bg-gray-900"
                  >
                    <Plus size={14} />
                  </button>
                </td>
                <td className="p-4 text-base ">{item.price}</td>
                <td className="p-4 text-base">
                  {(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 bg-red-500  rounded-full text-white hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
            <tr className="bg-gray-200 text-lg font-bold text-gray-900  dark:bg-gray-600 dark:text-gray-200">
              <td colSpan={6} className="p-4 text-left">
                Total
              </td>
              <td className="p-4 text-right ">{totalPrice().toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
