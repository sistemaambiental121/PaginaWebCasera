import React, { useState } from 'react'
import '../App.css'
import ProductGrid from '../components/ProductGrid'
import FilterBar from '../components/FilterBar'
import Cart from '../components/Cart'
import CotizadorModal from '../components/Cotizador/CotizadorModal'
import ArmadorModal from '../components/ArmadorModal'


function App() {
  const [filters, setFilters] = useState([])
  const [selectedStore, setSelectedStore] = useState("Downtown Store")
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [showCotizador, setShowCotizador] = useState(false)
  const [showArmador, setShowArmador] = useState(false)


  const addToCart = (product) => {
    const found = cartItems.find(item => item.id === product.id)
    if (found) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    const item = cartItems.find(p => p.id === productId)
    if (item && item.cantidad > 1) {
      setCartItems(
        cartItems.map(p =>
          p.id === productId ? { ...p, cantidad: p.cantidad - 1 } : p
        )
      )
    } else {
      setCartItems(cartItems.filter(p => p.id !== productId))
    }
  }

  const increaseQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    ))
  }

  const decreaseQuantity = (productId) => {
    const item = cartItems.find(p => p.id === productId)
    if (item && item.cantidad > 1) {
      setCartItems(cartItems.map(p =>
        p.id === productId
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      ))
    } else {
      setCartItems(cartItems.filter(p => p.id !== productId))
    }
  }

  const clearCart = () => setCartItems([])

  const toggleCart = () => setShowCart(!showCart)

  return (
    <div className="app dark-theme">
      <header className="navbar">
        <h1 className="logo">Mi Pc 1</h1>
        <div className="search-store">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
            <option>Mi pc 1</option>
            <option>Mi pc 2</option>
            <option>Mi pc 3</option>
          </select>
          <button>Search</button>
          <button onClick={() => setShowCotizador(true)} className="btn-cotizador">💻 Cotizador</button>
          <button onClick={() => setShowArmador(true)} className="btn-armador">🧠 Armador</button>
        </div>
        <button onClick={toggleCart} className="cart-toggle-btn">🛒 {cartItems.length}</button>
      </header>

      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        showCart={showCart}
        toggleCart={toggleCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <div className="banner">
        <img
          src={`/img/banner-${selectedStore.replace(/\s/g, '').toLowerCase()}.png`}
          alt="Banner"
          className="banner-image"
        />
      </div>

      <main className="main-container">
        <div className="sidebar">
          <FilterBar selectedFilters={filters} setSelectedFilters={setFilters} selectedStore={selectedStore} />
        </div>
        <div className="products-section">
          <h2 className="section-title">Productos</h2>
          <ProductGrid filters={filters} store={selectedStore} addToCart={addToCart} searchTerm={searchTerm} />
        </div>
      </main>

      {showCotizador && (
        <CotizadorModal onClose={() => setShowCotizador(false)} />
      )}
      {showArmador && (
       <ArmadorModal onClose={() => setShowArmador(false)} />
      )}
    </div>
  )
}

export default App
