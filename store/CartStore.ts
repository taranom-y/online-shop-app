import { Product } from '@/hooks/useProducts';
import { create } from 'zustand'


type CartItem = Product & { quantity: number };

type CartStore = {
  items: CartItem[];
  addItems: (product: Product) => void;
  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  totalQuantity: () => number ;
};



export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItems: (product) => {
    const existingItem = get().items.find((i) => i.id === product.id);
    if (existingItem) {
      set({
        items: get().items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({
        items: [...get().items, { ...product, quantity: 1 }],
      });
    }
  },

  incrementItem: (productId) =>
    set({
     items: get().items.map((item) =>
        productId === item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }),

  decrementItem: (productId) =>
    set({
      items: get().items
        .map((item) =>
          productId === item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }),

  removeItem: (productId) =>
    set({
        items: get().items.filter((item) => item.id !== productId),
    }),

    totalQuantity: () =>
    get().items.reduce(
        (sum, item) => sum + item.quantity,
        0   
    ),
}));



