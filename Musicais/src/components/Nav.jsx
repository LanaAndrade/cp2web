import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from '../assets/LOGO.svg';

function Nav() {
  return (
    <>
      
      <nav className="nav-menu">
        <div id='logo'>
          <img src={logo} alt="logo" />
          <p>Musi-cais</p>
        </div>
        <ul>
          <Link to="/" className="tlink">
            Home
          </Link>{' '}
          {''}

          <Link to="/ListaProduto" className="tlink">
            Produtos
          </Link>          

          <Link to="/contato" className="tlink">
            Contato
          </Link>

          <Link to="/login" id='btn-login' >
            Login
          </Link>
        </ul>
      </nav>
      
    </>
  );
}
export default Nav;
