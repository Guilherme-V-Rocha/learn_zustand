import '../index.css'
import { useCartStore } from '../store/CartStore'
import { formatter } from '../utils/Formatter'

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ])

  return (
    <div>
      <h1 className="cart-products">Cart Products</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {formatter.format(item.price)}
            <button onClick={() => removeFromCart(item.id)}>
              Remove to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
