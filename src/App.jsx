import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (pokemon) => {
    setCartItems(prevItems => [...prevItems, {
      id: pokemon.id,
      name: pokemon.name,
      price: pokemon.base_experience,
      image: pokemon.sprites.other['official-artwork'].front_default
    }])
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  )
}

export default App