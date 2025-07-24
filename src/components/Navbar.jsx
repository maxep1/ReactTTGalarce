import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Pokemons</Link>
      <Link to="/cart" className="cart-link">
        <FaShoppingCart />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </nav>
  )
}