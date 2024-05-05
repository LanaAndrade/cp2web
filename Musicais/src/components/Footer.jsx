import {} from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import pin from '../assets/pin.svg';

function Footer() {

  return (
    <>
      <hr></hr>
       <footer>
        <h3>Visite-nos ou veja nossas redes sociais</h3>
        <section>
            <div>
                <img src={pin} alt="pin" id="pin"/>
                <span id="pin-text">
                    <p>Rua Denis Roberto, 482 </p>
                    <p>São Paulo, SP</p>
                </span>
            </div>
            <ul id="social-media">
                <li>
                    <FaFacebook className="icon-facebook" />
                    <p>@Musi-cais</p>
                </li>
                <li>
                    <FaInstagram className="icon-instagram" />
                    <p>@Musi-caiss</p>
                </li>
                <li>
                    <FaTiktok className="icon-tiktok" />
                    <p>@Musi_cais</p>
                </li>
            </ul>
        </section>
    </footer>
    </>
  );
}
export default Footer;
