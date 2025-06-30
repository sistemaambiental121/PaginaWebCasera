import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'
import logo from '../assets/logo.png';
import logo2 from '../assets/logo.png';

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="homepage dark-theme">
      <header className="home-header">
        <img src={logo} alt="Logo" className="logo-home" />
        <nav>
          <button onClick={() => navigate('/tienda')} className="nav-btn">Ir a la Tienda 🛒</button>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">TechHub</h1>
          <p className="hero-subtitle">Componentes de alta gama para tu próximo build</p>
          <button className="btn-hero" onClick={() => navigate('/tienda')}>Explorar Tienda</button>
        </div>
        <img src={logo2} alt="Hero" className="hero-img" />
      </section>

      <section className="features">
        <h2 className="section-title">Servicios que ofrecemos</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🛠 Mantenimiento</h3>
            <p>Revisión y soporte técnico para tu equipo.</p>
          </div>
          <div className="feature-card">
            <h3>🧠 Asesoramiento</h3>
            <p>Te guiamos a elegir lo ideal según tu presupuesto.</p>
          </div>
          <div className="feature-card">
            <h3>📦 Distribución</h3>
            <p>Entregamos a todo el país de forma segura.</p>
          </div>
        </div>
      </section>

      <section className="map-contact">
        <h2 className="section-title full-width">Ubicación</h2>
        <div className="map-contact-wrapper">
          <div className="map-container">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.4031042397753!2d-66.15684692472935!3d-17.389453203973106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e374be127e020d%3A0xa9ef270964430aeb!2sPlaza%20Colon!5e0!3m2!1ses-419!2sbo!4v1719692620533!5m2!1ses-419!2sbo"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
            <a href="https://www.google.com/maps?ll=-17.3899776,-66.1520384" target="_blank" rel="noopener noreferrer">
              Ver en Google Maps
            </a>
          </div>

          <div className="contact-info">
            <h3>Ubicación: Cochabamba, Bolivia</h3>
            <p><strong>Horario:</strong> Siempre abierto</p>
            <p><strong>Teléfono:</strong> +591 68524435</p>
            <p><strong>WhatsApp:</strong> wa.me/59168524435</p>
            <p><strong>Correo:</strong> ventas-cbba@hotmail.com</p>
          </div>
        </div>
      </section>

      <footer className="custom-footer">
        <div className="footer-content compact">
          <div className="footer-block">
            <img src="/logo.png" alt="TechHub" className="footer-logo" />
            <p>📞 +591 68524435</p>
            <p>📧 contacto@techhub.com</p>
          </div>

          <div className="footer-block">
            <h3>TIENDA</h3>
            <p>Sobre Nosotros</p>
            <p>Mi Cuenta</p>
            <p>Contáctanos</p>
          </div>

          <div className="footer-block">
            <h3>REDES SOCIALES</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Todos los derechos reservados 2025 | TechHub</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
