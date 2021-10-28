import estilos from "../Estilos/Secciones.module.css";
import TarjetaProducto from "../MiniComponentes/tarjetaProducto";
import data from "../Productos.json";

export default function Secciones(props) {
  return (
    <div>
      <ul className={estilos.listaProducto}>
        {data.map((producto) =>
          producto.seccion === props.seccion ? (
            <TarjetaProducto
              tituloProducto={producto.nombre}
              imagenProducto={producto.imagen}
              descripcionProducto={producto.descripcion}
              precio={producto.precio}
              id={producto.id}
              key={producto.id}
            />
          ) : null
        )}
      </ul>
    </div>
  );
}
