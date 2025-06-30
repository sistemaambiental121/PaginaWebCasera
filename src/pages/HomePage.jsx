import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../assets/logo.png';
import heroImage from '../assets/logo.png';
import {
  FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt,
  FaClock, FaPhone, FaEnvelope, FaShoppingCart, FaTools, FaHeadset, FaTruck
} from 'react-icons/fa';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">

      {/* Header */}
      <header className="home-header">
        <div className="header-container">
          <div
            className="logo-container"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            aria-label="Volver al inicio"
            onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logo} alt="TechHub Logo" className="logo-home" />
            <span className="logo-text">Mi Pc</span>
          </div>
          <nav className="nav-menu" aria-label="Navegación principal">
            <button onClick={() => navigate('/tienda')} className="nav-btn">
              <FaShoppingCart className="btn-icon" />
              <span>Ir a la Tienda</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" role="banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Construye tu PC soñada</h1>
          <p className="hero-subtitle">Componentes de alta gama seleccionados por expertos</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/tienda')}>
              Explorar Productos
            </button>
            <button
              className="btn-secondary"
              onClick={() =>
                document.querySelector('.features')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Nuestros Servicios
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="PC Gamer" className="hero-img" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" aria-labelledby="features-title">
        <div className="section-header">
          <h2 id="features-title" className="section-title">¿Por qué elegir TechHub?</h2>
          <p className="section-subtitle">Ofrecemos más que solo productos</p>
        </div>
        <div className="feature-grid">
          {[
            {
              icon: <FaTools />,
              title: 'Mantenimiento Profesional',
              desc: 'Servicio técnico especializado para mantener tu equipo en óptimas condiciones.',
            },
            {
              icon: <FaHeadset />,
              title: 'Asesoramiento Personalizado',
              desc: 'Te ayudamos a encontrar los componentes perfectos para tus necesidades y presupuesto.',
            },
            {
              icon: <FaTruck />,
              title: 'Envío Rápido y Seguro',
              desc: 'Entregamos en todo el país con garantía de protección para tus productos.',
            },
          ].map(({ icon, title, desc }, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" aria-labelledby="contact-title">
        <div className="contact-container">
          <div className="contact-info">
            <h2 id="contact-title">Contáctanos</h2>
            <div className="info-item"><FaMapMarkerAlt className="info-icon" /><span>Cochabamba, Bolivia</span></div>
            <div className="info-item"><FaClock className="info-icon" /><span>Lunes a Viernes: 9:00 - 18:00</span></div>
            <div className="info-item"><FaPhone className="info-icon" /><span>+591 68524435</span></div>
            <div className="info-item"><FaWhatsapp className="info-icon" /><span><a href="https://wa.me/59168524435" target="_blank" rel="noopener noreferrer">wa.me/59168524435</a></span></div>
            <div className="info-item"><FaEnvelope className="info-icon" /><span>ventas-cbba@techhub.com</span></div>

            <div className="social-links" aria-label="Redes sociales">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Ubicación TechHub"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.4031042397753!2d-66.15684692472935!3d-17.389453203973106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e374be127e020d%3A0xa9ef270964430aeb!2sPlaza%20Colon!5e0!3m2!1ses-419!2sbo!4v1719692620533!5m2!1ses-419!2sbo"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo-container">
              <img src={logo} alt="TechHub" className="footer-logo" />
              <span>TechHub</span>
            </div>
            <p>Tu tienda de confianza para componentes de computación en Cochabamba.</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li role="link" onClick={() => navigate('/tienda')}>Tienda</li>
              <li>Servicios</li>
              <li>Contacto</li>
              <li>Términos y Condiciones</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul>
              <li><FaPhone /> +591 68524435</li>
              <li><FaEnvelope /> ventas@techhub.com</li>
              <li><FaMapMarkerAlt /> Cochabamba, Bolivia</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mi Pc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
