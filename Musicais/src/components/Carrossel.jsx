import {} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '/src/css/carrossel.css'
import instrumento1 from '/src/assets/Instrumento1.svg'
import instrumento2 from '/src/assets/instrumento2.svg'
import instrumento3 from '/src/assets/instrumento3.svg'
import instrumento4 from '/src/assets/instrumento4.svg'

function Carrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h2>Carrossel de Exemplo</h2>
      <Slider {...settings}>
        <div>
          <img src={instrumento1} alt="Imagem 1" />
        </div>
        <div>
          <img src={instrumento2} alt="Imagem 2" />
        </div>
        <div>
          <img src={instrumento3} alt="Imagem 3" />
        </div>
        <div> 
        <img src={instrumento4} alt="Imagem 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Carrossel;
