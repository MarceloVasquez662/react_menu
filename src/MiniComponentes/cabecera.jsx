import { Link } from "react-scroll";
import estilos from "../Estilos/Cabecera.module.css";

export default function Cabecera(props) {
  return (
    <div>
      <hr id={props.id} className={estilos.cabeceraDivision}></hr>
      <div className={estilos.cabecera}>
        <Link to="Inicio" spy={true} smooth={true}>
          <h2>{props.titulo}</h2>
        </Link>
      </div>
    </div>
  );
}
