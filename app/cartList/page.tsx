"use client";
import React from "react";
import { useCartStore } from "@/store/CartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
export default function CartListPage() {
  const { items, incrementItem, decrementItem, removeItem } = useCartStore();

  return (
    <div className="overflow-x-auto mx-8 mt-25 ">
      <table className="w-full rounded-2xl  overflow-hidden  ">
        <thead className="bg-gray-500 text-center">
          <tr>
            <th className="p-4 ">number</th>
            <th className="p-4 ">Title</th>
            <th className="p-4 ">description</th>
            <th className="p-4 ">Quantity</th>
            <th className="p-4 ">price</th>
            <th className="p-4 ">Total </th>
            <th className="p-4 "> </th>
          </tr>
        </thead>
        <tbody className="bg-gray-600">
          {items.map((item, index) => (
            <tr key={item.id} className="text-sm">
              <td className="p-4 text-center">{index + 1}</td>
              <td className="p-4">{item.title}</td>
              <td className="p-4 ">{item.description}</td>
              <td className="p-4 text-nowrap">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="p-1 mr-2 rounded-full bg-gray-900 "
                >
                  <Minus size={16} />
                </button>
                {item.quantity}
                <button
                  onClick={() => incrementItem(item.id)}
                  className="p-1 ml-2 rounded-full bg-gray-900"
                >
                  <Plus size={16} />
                </button>
              </td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">{(item.price * item.quantity).toFixed(2)}</td>
              <td className="p-4">
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-2 py-1 bg-red-500  rounded"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
