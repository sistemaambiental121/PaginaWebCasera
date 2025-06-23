import React, { useState } from 'react'
import allProducts from '../data/products'

const ProductCard = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const getOptimalProducts = () =>
    allProducts.filter(p => product.optimalMatch?.includes(p.name))

  const getCompatibleProducts = () =>
    allProducts.filter(p =>
      product.compatibility?.includes(p.name) &&
      !product.optimalMatch?.includes(p.name)
    )

  const currentImage = product.colorImages?.[selectedColor] || product.image

  return (
    <>
      <div className="product-card">
        <div className="card-image">
          <img src={product.image} alt={product.name} />
          <span className="price-badge">${product.price.toFixed(2)}</span>
        </div>
        <div className="card-body">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className={`status ${product.stock}`}>
            {product.stock === 'in-stock' && 'In Stock'}
            {product.stock === 'low-stock' && 'Low Stock'}
            {product.stock === 'out-stock' && 'Out of Stock'}
          </div>
          <button className="details-btn" onClick={() => setShowDetails(true)}>
            View Details
          </button>
          <button className="add-cart-btn" onClick={() => addToCart(product)}>
            ➕ Añadir al carrito
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="modal-backdrop" onClick={() => setShowDetails(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <h2>{product.name}</h2>
            <img src={currentImage} alt="Vista por color" style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} />

            <p><strong>Brand:</strong> {product.brand}</p>

            <p><strong>Colors:</strong></p>
            <ul className="color-list">
              {product.colors.map(color => (
                <li
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    backgroundColor: color.toLowerCase(),
                    border: selectedColor === color ? '2px solid white' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  {color}
                </li>
              ))}
            </ul>

            {product.optimalMatch?.length > 0 && (
              <>
                <p><strong>Compatibilidad Ideal:</strong></p>
                <ul>
                  {getOptimalProducts().map(p => (
                    <li key={p.id}>
                      ✅ {p.name} <span style={{ color: "#10b981", fontWeight: "bold" }}>[Recomendado]</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {getCompatibleProducts().length > 0 && (
              <>
                <p><strong>También compatible con:</strong></p>
                <ul>
                  {getCompatibleProducts().map(p => (
                    <li key={p.id}>• {p.name}</li>
                  ))}
                </ul>
              </>
            )}

            <button onClick={() => setShowDetails(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCard
