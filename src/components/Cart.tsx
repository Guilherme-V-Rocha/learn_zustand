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
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {formatter.format(item.price)}
            <button onClick={() => removeFromCart(index)}>
              Remove to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
