import React, { useState } from 'react';
import './App.css';
import logo from '../public/logo.png'; 

function App() {
  // State untuk mengontrol menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Derf4s Logo" />
        </div>

        {/* Tombol Hamburger (Hanya muncul di Mobile) */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu Links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#community" onClick={toggleMenu}>Community</a></li>
          <li><a href="#join" className="btn-mobile-join" onClick={toggleMenu}>Gabung</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <span className="section-label">Established 2026</span>
        <h1>FROM DERF4S TO <span>MASTAH</span></h1>
        <p>Wadah kolaborasi kreatif untuk bertransformasi menjadi ahli di bidangnya.</p>
        <a href="#about" className="btn-cta">Mulai Perjalanan</a>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <span className="section-label">Kenapa Derf4s?</span>
        <h2>Membangun Masa Depan Digital</h2>
        <div className="grid-container">
          <div className="feature-card">
            <h3>Networking</h3>
            <p>Terhubung dengan anggota yang memiliki visi yang sama.</p>
          </div>
          <div className="feature-card">
            <h3>Sharing</h3>
            <p>Akses diskusi eksklusif untuk naik level dari nol.</p>
          </div>
          <div className="feature-card">
            <h3>Solidarity</h3>
            <p>Keluarga tempat berbagi solusi tantangan teknis.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Derf4s Community.</p>
      </footer>
    </div>
  );
}

export default App;