import { useCartStore } from '../store/CartStore'
import { formatter } from '../utils/Formatter'

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ])

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {formatter.format(item.price)}
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
