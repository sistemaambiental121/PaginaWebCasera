import React from 'react'

const Cart = ({
  cartItems,
  removeFromCart,
  clearCart,
  showCart,
  toggleCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.cantidad, 0)

  return (
    <div className={`cart-panel ${showCart ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>🛒 Carrito</h3>
        <button onClick={toggleCart}>✖</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-msg">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id}>
                <div style={{ flex: 1 }}>
                  {item.name}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                  <span>x{item.cantidad}</span>
                  <button onClick={() => increaseQuantity(item.id)}>➕</button>
                </div>
                <span>${(item.price * item.cantidad).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="cart-total"><strong>Total:</strong> ${total.toFixed(2)}</p>
          <button className="clear-cart" onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  )
}

export default Cart
