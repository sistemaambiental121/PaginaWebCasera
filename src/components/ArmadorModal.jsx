import React, { useState } from 'react'
import products from '../data/products'
import jsPDF from 'jspdf'
import logo from '../assets/logo.png' // logo en carpeta public

function ArmadorModal({ onClose }) {
  const [seleccion, setSeleccion] = useState({})

  const filtrarPorTipo = (tipo) => products.filter(p => p.tags.includes(tipo))

  const getCompatibles = (tipo) => {
    const cpu = seleccion["CPU"]
    const motherboard = seleccion["Motherboard"]

    if (tipo === "Motherboard" && cpu) {
      return filtrarPorTipo("Motherboard").filter(p =>
        p.compatibility.includes(cpu.name)
      )
    }

    if (tipo === "RAM" && motherboard) {
      return filtrarPorTipo("RAM").filter(p =>
        p.tier === motherboard.tier
      )
    }

    if (tipo === "GPU" && motherboard) {
      return filtrarPorTipo("GPU").filter(p =>
        p.tier === motherboard.tier
      )
    }

    return filtrarPorTipo(tipo)
  }

  const tipos = ["CPU", "Motherboard", "RAM", "GPU"]

  const handleChange = (tipo, value) => {
    setSeleccion((prev) => ({
      ...prev,
      [tipo]: products.find(p => p.id.toString() === value)
    }))
  }

  const total = Object.values(seleccion).reduce((acc, curr) => acc + (curr?.price || 0), 0)

  const generarResumenWhatsApp = () => {
    let mensaje = `🛠 *Tu PC ha sido armada exitosamente:*\n\n`
    for (const [tipo, item] of Object.entries(seleccion)) {
      mensaje += `🔧 *${tipo.toUpperCase()}*: ${item.name} ($${item.price})\n`
    }
    mensaje += `\n💰 *Total estimado:* $${total}`
    return mensaje
  }

  const generarPDF = async () => {
    const doc = new jsPDF()

    const img = new Image()
    img.src = logo

    img.onload = () => {
      doc.addImage(img, 'PNG', 15, 10, 40, 20)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(16)
      doc.text("Resumen de Armado de PC", 70, 25)

      doc.setFont("helvetica", "normal")
      doc.setFontSize(12)
      let startY = 50

      doc.text("Producto", 20, startY)
      doc.text("Cant.", 90, startY)
      doc.text("P. Unitario", 120, startY)
      doc.text("Total", 170, startY)

      let y = startY + 10
      for (const [tipo, item] of Object.entries(seleccion)) {
        doc.text(item.name, 20, y)
        doc.text("1", 95, y)
        doc.text(`$${item.price}`, 120, y)
        doc.text(`$${item.price}`, 170, y)
        y += 10
      }

      doc.setFont("helvetica", "bold")
      doc.text(`💰 Cotización total: $${total}`, 20, y + 10)

      doc.save("armado_pc.pdf")
    }
  }

  const waLink = `https://wa.me/?text=${encodeURIComponent(generarResumenWhatsApp())}`

  const limpiarSeleccion = () => setSeleccion({})

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Armador Automático de PC</h2>

        {tipos.map((tipo) => (
          <div key={tipo} className="input-group">
            <label>{tipo}</label>
            <select
              value={seleccion[tipo]?.id || ''}
              onChange={(e) => handleChange(tipo, e.target.value)}
            >
              <option value="">Seleccione...</option>
              {getCompatibles(tipo).map(item => (
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
          <button className="btn-green" onClick={generarPDF}>📄 PDF</button>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-green">📲 WhatsApp</a>
          <button className="btn-yellow" onClick={limpiarSeleccion}>🧹 Limpiar</button>
          <button className="btn-red" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default ArmadorModal
