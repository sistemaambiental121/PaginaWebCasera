import React, { useState } from 'react'
import products from '../../data/products'

function CotizadorModal({ onClose }) {
  const [seleccion, setSeleccion] = useState({})

  // Detectar categorías únicas que sirven como grupo
  const tipos = ["CPU", "Motherboard", "RAM", "GPU"] // Puedes agregar más si deseas

  const dataAgrupada = tipos.reduce((acc, tipo) => {
    acc[tipo] = products.filter(p => p.tags.includes(tipo))
    return acc
  }, {})

  const handleChange = (tipo, value) => {
    setSeleccion((prev) => ({
      ...prev,
      [tipo]: products.find(p => p.id.toString() === value)
    }))
  }

  const total = Object.values(seleccion).reduce((acc, curr) => acc + (curr?.price || 0), 0)

  const resumenTexto = Object.entries(seleccion)
    .map(([tipo, comp]) => `${tipo.toUpperCase()}: ${comp.name}`)
    .join('\n') + `\nTOTAL: $${total}`

  const waLink = `https://wa.me/?text=${encodeURIComponent(resumenTexto)}`

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Cotizador de PC</h2>

        {Object.entries(dataAgrupada).map(([tipo, items]) => (
          <div key={tipo} className="input-group">
            <label>{tipo}</label>
            <select onChange={(e) => handleChange(tipo, e.target.value)}>
              <option value="">Seleccione...</option>
              {items.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name} - ${item.price}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div className="resumen">
          <h3>Resumen</h3>
          <ul>
            {Object.entries(seleccion).map(([tipo, item]) => (
              <li key={tipo}>{tipo.toUpperCase()}: {item.name} - ${item.price}</li>
            ))}
          </ul>
          <p className="total">Total: ${total}</p>
        </div>

        <div className="modal-actions">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-green">Enviar por WhatsApp</a>
          <button className="btn-red" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default CotizadorModal
