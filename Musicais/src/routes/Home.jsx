import {} from 'react';
import '../css/homeestilo.css';
import Carrossel from '/src/components/Carrossel.jsx';


function Home() {
  return (
    <>
    <div className='mãe'>
    <div className='titulo'>
        <h1>Instrumentos </h1>
        <h1>Musicais</h1>
        <p>Aqui temos as variadas formas de</p>
        <p>músicas veja um pouco ao lado</p>
        <div className="button-container">
          <button className="circular-button">Ou mais clicando aqui</button>
        </div>
      </div>

      <div className='carrossel'>
      <Carrossel /> {/* Use o componente Carrossel aqui */}

      </div>
    </div>

    </>
      

    
  );
}

export default Home;
