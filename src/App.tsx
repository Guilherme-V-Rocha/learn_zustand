import { AvailableProducts } from './components/AvailableProducts'
import { Cart } from './components/Cart'
import { Total } from './components/Total'
import './index.css'

function App() {
  return (
    <div className="products">
      <AvailableProducts />
      <Cart />
      <Total />
    </div>
  )
}

export default App
