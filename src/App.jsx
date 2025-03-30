import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <NavBar />

      <section
        data-aos="fade-up"
        style={{
          minHeight: 'calc(100vh - 60px)', // Ajusta 60px según la altura de tu NavBar
          padding: '50px',
          backgroundColor: '#f0f0f0',
          margin: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h2>Sección 1 - Fade Up Right</h2>
        <p>Esta sección ocupa casi toda la altura de la pantalla, excepto el NavBar.</p>
        <p>Aquí puedes agregar más contenido.</p>
      </section>

      <section
        data-aos="fade-left"
        style={{
          minHeight: 'calc(100vh - 60px)',
          padding: '50px',
          backgroundColor: '#e0e0e0',
          margin: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h2>Sección 2 - Fade Up Central</h2>
        <p>Esta sección también ocupa casi toda la altura de la pantalla.</p>
        <p>Puedes personalizar el contenido y los estilos.</p>
      </section>

      <section
        data-aos="fade-right"
        style={{
          minHeight: 'calc(100vh - 60px)',
          padding: '50px',
          backgroundColor: '#d0d0d0',
          margin: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h2>Sección 3 - Fade Up Left</h2>
        <p>Y esta sección, al igual que las anteriores, ocupa casi toda la altura.</p>
        <p>¡Experimenta con diferentes contenidos y estilos!</p>
      </section>
    </>
  );
}

export default App;