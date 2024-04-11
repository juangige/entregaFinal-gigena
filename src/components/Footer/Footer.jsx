import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de una carga de datos desde el servidor
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulando una carga de 2 segundos
  }, []);

  return (
    <>
      {!loading && (
        <footer className='footerContainer'>
          <div className='footerContent'>
            <div className='footerLogo'>
              <Link to="/">
                <h3 className='titleFooter'>Jtech</h3>
              </Link>
            </div>
            <div className='footerLinks'>
              <h4>Enlaces útiles</h4>
              <ul>
                <li><Link to='#'>Sobre Nosotros</Link></li>
                <li><Link to='#'>Contacto</Link></li>
                <li><Link to='#'>Soporte</Link></li>
                <li><Link to='#'>Legal</Link></li>
              </ul>
            </div>
            <div className='footerSocial'>
              <h4>Síguenos</h4>
              <ul>
                <li><Link to='#'><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link to='#'><i className="fab fa-twitter"></i></Link></li>
                <li><Link to='#'><i className="fab fa-instagram"></i></Link></li>
                <li><Link to='#'><i className="fab fa-linkedin-in"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className='footerBottom'>
            <p>&copy; 2024 JTech. Todos los derechos reservados.</p>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;

