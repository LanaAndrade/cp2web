import { useState } from 'react';
import '../css/homeestilo.css';
import { Link } from 'react-router-dom';
import instrumento1 from '/src/assets/Instrumento1.svg';

import instrumento3 from '/src/assets/instrumento3.svg';
import instrumento4 from '/src/assets/instrumento4.svg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <div className='container'>
      <div className='mãe'>
        <div className='titulo'>
          <h1>Instrumentos </h1>
          <h1>Musicais</h1>
          <p>Aqui temos as variadas formas de</p>
          <p>músicas veja um pouco ao lado</p>
          <div className="button-container">
            
          <Link to="/ListaProduto" className="circular-button">Ou mais clicando aqui</Link>
          </div>
        </div>
      </div>

      <div className='carousel'>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <img src={instrumento1} alt="First slide"></img>
                <p className='nomeproduto'>Guitarra</p>
                <p className='precoproduto'>R$ 500,00</p> 
              </div>
            </div>
            </div>
            <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <img src={instrumento3} alt="Third slide"></img>
                <p className='nomeproduto'>Flauta</p>
                <p className='precoproduto'>R$ 200,00</p> 
              </div>
            </div>
            <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <img src={instrumento4} alt="Fourth slide"></img>
                <p className='nomeproduto'>Baixo</p>
                <p className='precoproduto'>R$ 600,00</p> 
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"> ⭠ </span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"> ⭢ </span>
          </a>
        </div>
      </div>

  );
}

export default Home;


