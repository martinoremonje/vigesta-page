import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import construction from './assets/construction.png'

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
        className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center bg-[url('./assets/construction.png')] bg-cover bg-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sección 1 - Fade Up Right</h2>
        <p className="text-center">Esta sección ocupa casi toda la altura de la pantalla, excepto el NavBar.</p>
        <p className="text-center">Aquí puedes agregar más contenido.</p>
      </section>

      <section
        data-aos="fade-left"
        className="min-h-[calc(100vh-60px)] p-8 bg-gray-200 m-4 flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sección 2 - Fade Up Central</h2>
        <p className="text-center">Esta sección también ocupa casi toda la altura de la pantalla.</p>
        <p className="text-center">Puedes personalizar el contenido y los estilos.</p>
      </section>

      <section
        data-aos="fade-right"
        className="min-h-[calc(100vh-60px)] p-8 bg-gray-300 m-4 flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sección 3 - Fade Up Left</h2>
        <p className="text-center">Y esta sección, al igual que las anteriores, ocupa casi toda la altura.</p>
        <p className="text-center">¡Experimenta con diferentes contenidos y estilos!</p>
      </section>

      <Footer/ >
    </>
  );
}

export default App;