import React from 'react';

export default function Nav() {
  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossOrigin="anonymous"
      />
      
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-end gap-4">
            <a href="/concessionarias" className="text-white text-decoration-none small">Concessionárias</a>
            <a href="/contato" className="text-white text-decoration-none small">Contato</a>
            <a href="/myaudi" className="text-white text-decoration-none small">myAudi</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <svg width="80" height="32" viewBox="0 0 100 40" fill="none">
              <circle cx="12" cy="20" r="10" stroke="#000" strokeWidth="2" fill="none"/>
              <circle cx="32" cy="20" r="10" stroke="#000" strokeWidth="2" fill="none"/>
              <circle cx="52" cy="20" r="10" stroke="#000" strokeWidth="2" fill="none"/>
              <circle cx="72" cy="20" r="10" stroke="#000" strokeWidth="2" fill="none"/>
            </svg>
          </a>

          {/* Toggle button for mobile */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/modelos">Modelos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="/comprar">Comprar</a>
              </li>
            </ul>

            {/* Search form */}
            <div className="d-flex align-items-center gap-2">
              <input 
                className="form-control form-control-sm" 
                type="search" 
                placeholder="Buscar" 
                style={{width: '200px'}}
              />
              <button className="btn btn-outline-dark btn-sm" type="button">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
              <button className="btn btn-outline-dark btn-sm">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}