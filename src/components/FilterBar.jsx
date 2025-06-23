import React from 'react'
import products from '../data/products'

const FilterBar = ({ selectedFilters, setSelectedFilters, selectedStore }) => {
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter))
    } else {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  const storeProducts = products.filter(p => p.store === selectedStore)

  // Extraer categorías y marcas dinámicamente
  const allTags = [...new Set(storeProducts.flatMap(p => p.tags))]
  const brands = [...new Set(storeProducts.map(p => p.brand))].filter(Boolean)

  return (
    <div className="filter-bar">
      <h3>Filters</h3>

      <div className="filter-section">
        <h4>Categories</h4>
        <ul>
          {allTags.map(tag => (
            <li key={tag}>
              <input
                type="checkbox"
                checked={selectedFilters.includes(tag)}
                onChange={() => toggleFilter(tag)}
              />{" "}
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h4>Brands</h4>
        <ul>
          {brands.map(brand => (
            <li key={brand}>
              <input
                type="checkbox"
                checked={selectedFilters.includes(brand)}
                onChange={() => toggleFilter(brand)}
              />{" "}
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterBar
