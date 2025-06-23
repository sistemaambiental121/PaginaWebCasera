import React from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'

const ProductGrid = ({ filters, store, addToCart, searchTerm }) => {
  const filteredProducts = products.filter(product => {
    const matchesStore = product.store === store

    const matchesFilter =
      filters.length === 0 ||
      filters.some(f => product.tags.includes(f) || product.brand === f)

    const matchesSearch =
      searchTerm.trim() === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesStore && matchesFilter && matchesSearch
  })

  return (
    <div className="product-grid">
      {filteredProducts.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  )
}

export default ProductGrid
