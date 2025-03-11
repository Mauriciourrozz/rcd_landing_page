import React, { useState } from 'react';
import './App.css';

function Card({ frontContent, backContent }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`card ${flipped ? 'flipped' : ''}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          {frontContent}
        </div>
        <div className="card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

// Componente para formas animadas en el fondo
function FloatingShapes() {
  return (
    <div className="floating-shapes">
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      {/* Forma adicional */}
      <div className="shape shape4"></div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <FloatingShapes />
      <header className="header">
      <div className="header-logo-container">
        <img src="images/loguito.png" alt="Logo RCD Reciclaje" className="header-logo"/></div>
        <nav className="header-nav">
          <a href="#section1" className="nav-link">Home</a>
          <a href="#section2" className="nav-link">About</a>
          <a href="#section3" className="nav-link">Team</a>
        </nav>
      </header>

      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section id="section1" className="section1">
      <img src="images/logo.png" alt="Logo RCD Reciclaje" className="section1-logo"/>
        <h2 className="section1-title">'RCD Reciclaje' Management system</h2>
        <p className="section1-extra">The idea behind this app is a management system for the company RCD Reciclaje, thus managing to automate all its processes regarding environmental care and the control of material waste from construction works. </p>
        <p className="section1-text">
        Manage the waste from your works by clicking the following button
        </p>
        <button className="section1-button">Register here</button>
      </section>

      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

      <section id="section2" className="section2">
        <h2 className="section2-title">About the app</h2>
        <div className="section2-row row1">
          <p className="section2-text left-text">Register and log in</p>
          <div className="section2-image-placeholder">
            <img src="/images/Iniciodesesion.PNG" alt="Regístrate e inicia sesión" />
          </div>
        </div>

        <div className="section2-row row2">
          <div className="section2-image-placeholder">
            <img src="/images/registroobra1.PNG" alt="Completa el formulario" />
          </div>
          <p className="section2-text right-text">Complete a form and register your works</p>
        </div>

        <div className="section2-row row3">
          <p className="section2-text left-text">Request the removal of your debris</p>
          <div className="section2-image-placeholder">
            <img src="/images/coordinacion.PNG" alt="Solicita el retiro de escombros" />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section id="section3" className="section3">
        <h2 className="section3-title">Our team</h2>
        <p className="linkedin-text">Click on the images to access our LinkedIn profile</p>
        <div className="cards-container">
          {/* Tarjeta 1 */}
          <Card
            frontContent={
              <>
                <div className="photo-placeholder top-photo">
                  <img src="/images/IgnacioVanzo.jpg" alt="Ignacio Vanzo" />
                </div>
                <div className="card-text">
                  <p className="card-name">Ignacio Vanzo</p>
                  <p className="card-role">Project Manager & Full stack Developer</p>
                </div>
              </>
            }
            backContent={
              <>
                <div className="card-back-content">
                  <img src="/images/Nachoqr.png" alt="Ignacio Vanzo Back" />
                </div>
                <a href="https://github.com/nachovanzo7" target="_blank" rel="noopener noreferrer" className="card-logo-link">
                  <img src="/images/github.png" alt="Logo" className="card-logo" />
                </a>
              </>
            }
          />

          {/* Tarjeta 2 */}
          <Card
            frontContent={
              <>
                <div className="photo-placeholder top-photo">
                  <img src="/images/MauricioUrroz.jpg" alt="Mauricio Urroz" />
                </div>
                <div className="card-text">
                  <p className="card-name">Mauricio Urroz</p>
                  <p className="card-role">Backend Developer</p>
                </div>
              </>
            }
            backContent={
              <>
                <div className="card-back-content">
                  <img src="/images/Mauriqr.png" alt="Mauricio Urroz Back" />
                </div>
                <a href="https://github.com/Mauriciourrozz" target="_blank" rel="noopener noreferrer" className="card-logo-link">
                  <img src="/images/github.png" alt="Logo" className="card-logo" />
                </a>
              </>
            }
          />

          {/* Tarjeta 3 */}
          <Card
            frontContent={
              <>
                <div className="photo-placeholder top-photo">
                  <img src="/images/OwenFernandez.jpg" alt="Owen Fernandez" />
                </div>
                <div className="card-text">
                  <p className="card-name">Owen Fernandez</p>
                  <p className="card-role">Frontend Developer</p>
                </div>
              </>
            }
            backContent={
              <>
                <div className="card-back-content">
                  <img src="/images/Owenqr.png" alt="Owen Fernandez Back" />
                </div>
                <a href="https://github.com/OwenFernandez9" target="_blank" rel="noopener noreferrer" className="card-logo-link">
                  <img src="/images/github.png" alt="Logo" className="card-logo" />
                </a>
              </>
            }
          />
        </div>
      </section>
        <footer className="footer">
          <p>♻️ Made by Ignacio Vanzo, Mauricio Urroz & Owen Fernandez ♻️</p>
        </footer>
    </div>
  );
}

export default App;
