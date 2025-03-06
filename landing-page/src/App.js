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

function App() {
  return (
    <div>
      <header className="header">
        <nav className="header-nav">
          <a href="#section1" className="nav-link">Home</a>
          <a href="#section2" className="nav-link">About</a>
          <a href="#section3" className="nav-link">Team</a>
        </nav>
      </header>

{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

      <section id="section1" className="section1">
        <h2 className="section1-title">Sistema de gestion RCD Reciclaje</h2>
        <p className="section1-text">
          Gestiona los residuos de tus obras dando click al siguiente boton
        </p>
        <button className="section1-button">Registrate aqui</button>
        <p className="section1-extra">Nues</p>
      </section>

{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

<section id="section2" className="section2">
        <h2 className="section2-title">Simple y facil de usar</h2>

        <div className="section2-row row1">
          <p className="section2-text left-text">Registrate e inicia sesion</p>
            <div className="section2-image-placeholder">
            {/* Aquí se colocará la imagen (ruta a definir) */}
            </div>
        </div>

        <div className="section2-row row2">
          <div className="section2-image-placeholder">
            {/* Aquí se colocará la imagen (ruta a definir) */}
          </div>
          <p className="section2-text right-text">Completa un formulario y registra tus obras</p>
        </div>

        <div className="section2-row row3">
          <p className="section2-text left-text">Solicita el retiro de tus escombros</p>
          <div className="section2-image-placeholder">
            {/* Aquí se colocará la imagen (ruta a definir) */}
          </div>
        </div>
      </section>

{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

<section id="section3" className="section3">
        <h2 className="section3-title">Nuestro equipo</h2>
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
                {/* Contenido del reverso de la tarjeta (por ejemplo, otra imagen o información adicional) */}
                <div className="card-back-content">
                  <img src="/images/Nachoqr.png" alt="Ignacio Vanzo Back" />
                </div>
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
                  <img src="/images/OwenFernandez-back.jpg" alt="Owen Fernandez Back" />
                </div>
              </>
            }
          />
        </div>
      </section>
    </div>
  );
}

export default App;
