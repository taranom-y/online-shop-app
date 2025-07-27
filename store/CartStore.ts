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
  totalPrice: () => number;
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

  incrementItem: (productId) => {
   const newItems = [...get().items];   
   const targetItem = newItems.find(({ id }) => id === productId);  
  if (targetItem) targetItem.quantity++;  
  set({ items: newItems,});
},

    decrementItem: (productId) => {
    const newItems = [...get().items];
    const targetItem = newItems.find(({ id }) => id === productId);
    if (targetItem && targetItem.quantity > 1) {
      targetItem.quantity--;
    }
    else if (targetItem && targetItem.quantity === 1) {
      newItems.splice(newItems.indexOf(targetItem), 1);
    }
    set({ items: newItems });
  },

  removeItem: (productId) =>
    set({
        items: get().items.filter((item) => item.id !== productId),
    }),

    totalQuantity: () =>
    get().items.reduce(
        (sum, item) => sum + item.quantity,
        0   
    ),
    totalPrice: () =>
    get().items.reduce(
      (sum, item) => sum + item.price * item.quantity, 0),

}));



