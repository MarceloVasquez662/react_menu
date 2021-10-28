import "./App.css";
import Cabecera from "./MiniComponentes/cabecera";
import Navbar from "./Componentes/navbar";
import Secciones from "./Componentes/secciones";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Cabecera titulo="Platos Principales" id="Platos"></Cabecera>
        <Secciones seccion="Principal"></Secciones>
      </div>
      <div id="Bebidas">
        <Cabecera titulo="Bebidas" id="Bebidas"></Cabecera>
        <Secciones seccion="Bebidas"></Secciones>
      </div>
      <div id="Postres">
        <Cabecera titulo="Postres" id="Postres"></Cabecera>
        <Secciones seccion="Postres"></Secciones>
      </div>
      <div id="Complementos">
        <Cabecera titulo="Complementos" id="Complementos"></Cabecera>
        <Secciones seccion="Complementos"></Secciones>
      </div>
    </div>
  );
}

export default App;
