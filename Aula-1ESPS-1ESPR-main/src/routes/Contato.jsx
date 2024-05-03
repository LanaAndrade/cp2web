import {} from 'react';
import '../css/estilo.css';

function Contato() {
  return (
    <>
      <section className="contato">
    
        <form>
        <h1>Contato</h1>
          <p>
          <input type="text" placeholder='Digite o Assunto'/>
          </p>
          <textarea placeholder='Deixe sua mensagem'></textarea>
        </form>
      </section>
    </>
  );
}
export default Contato;