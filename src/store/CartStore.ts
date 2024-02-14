import { create } from 'zustand'

const initialItems = [
  {
    id: 1,
    name: 'Wireless Bluetooth Earbuds',
    price: 45.6,
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 23.99,
  },
  {
    id: 3,
    name: 'Stainless Steel Water Bottle',
    price: 35,
  },
  {
    id: 4,
    name: 'Classic Steel Water Bottle',
    price: 55,
  },
  {
    id: 5,
    name: 'Old Steel Water Bottle',
    price: 75.68,
  },
]

type Item = {
  id: number
  name: string
  price: number
}

type CartStore = {
  availableItems: Array<Item>
  cart: Array<Item>
  addToCart: (item: Item) => void
  removeFromCart: (id: number) => void
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialItems,
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  }
})
