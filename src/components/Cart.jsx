import { Link } from 'react-router-dom'

export default function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0)

  return (
    <div className="cart-container">
      <h1>Tu Carrito Pokemon</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
          <Link to="/products" className="browse-link">
            ¡Elegí tu próximo Pokemon aqui!
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} width="60" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="total-section">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  )
}