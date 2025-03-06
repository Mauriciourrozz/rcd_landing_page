import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <nav className="header-nav">
          <a href="#section1" className="nav-link">Sección 1</a>
          <a href="#section2" className="nav-link">Sección 2</a>
          <a href="#section3" className="nav-link">Sección 3</a>
        </nav>
      </header>

{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

      <section id="section1" className="section1">
        <h2 className="section1-title">Sistema de gestion RCD Reciclaje</h2>
        <p className="section1-text">
          Gestiona los residuos de tus obras dando click al siguiente boton
        </p>
        <button className="section1-button">Registrate aqui</button>
        <p className="section1-extra">Aca voy a encajar un chamuyo sobre la app</p>
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

      <section id="nuestroequipo" className="nuestroequipo">
        <h2 className="nuestroequipo-title">Sección 3</h2>
        <div className="cards-container">
          {/* Tarjeta 1 */}
          <div className="card">
            <div className="card-inner">
              <div className="photo-placeholder top-photo">
                {/* Foto superior (ruta a definir) */}
              </div>
              <div className="card-text">
                <p className="card-name">Nombre</p>
                <p className="card-role">Rol</p>
              </div>
              <div className="photo-placeholder bottom-photo">
                {/* Foto inferior (ruta a definir) */}
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card">
            <div className="card-inner">
              <div className="photo-placeholder top-photo">
                {/* Foto superior (ruta a definir) */}
              </div>
              <div className="card-text">
                <p className="card-name">Nombre</p>
                <p className="card-role">Rol</p>
              </div>
              <div className="photo-placeholder bottom-photo">
                {/* Foto inferior (ruta a definir) */}
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card">
            <div className="card-inner">
              <div className="photo-placeholder top-photo">
                {/* Foto superior (ruta a definir) */}
              </div>
              <div className="card-text">
                <p className="card-name">Nombre</p>
                <p className="card-role">Rol</p>
              </div>
              <div className="photo-placeholder bottom-photo">
                {/* Foto inferior (ruta a definir) */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
