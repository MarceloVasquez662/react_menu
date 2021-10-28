import logo from "../Imagenes/pizza.svg";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="Inicio">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="Inicio" spy={true} smooth={true}>
          <img src={logo} height="40" width="40" alt="logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navegacionMenu"
          aria-controls="navegacionMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navegacionMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="Platos" spy={true} smooth={true}>
                Platos Principales
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Bebidas" spy={true} smooth={true}>
                Bebidas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Postres" spy={true} smooth={true}>
                Postres
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="Complementos"
                spy={true}
                smooth={true}
              >
                Complementos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
