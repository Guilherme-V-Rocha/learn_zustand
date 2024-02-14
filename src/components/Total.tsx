import { useCartStore } from '../store/CartStore'
import { formatter } from '../utils/Formatter'

export const Total = () => {
  const items = useCartStore((state) => state.cart)
  const sum = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <div>
      <h2>Total: {formatter.format(sum)}</h2>
    </div>
  )
}
