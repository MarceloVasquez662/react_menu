import estilos from "../Estilos/TarjetaProducto.module.css";

export default function TarjetaProducto(props) {
  return (
    <div className={estilos.tarjetaProducto}>
      <li id={props.id}>
        <div>
          <h3>{props.tituloProducto}</h3>
          <div className={estilos.contenedorImagen}>
            <img
              className={estilos.imagen}
              alt={props.tituloProducto}
              src={props.imagenProducto}
              width="250"
              height="500"
            />
            <div className={estilos.overlay}>
              <div>
                <div className={estilos.texto}>{props.descripcionProducto}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={estilos.precioProducto}>
          <p className="badge badge-success" href="/">
            {props.precio}
          </p>
        </div>
      </li>
    </div>
  );
}
