import estilos from "../Estilos/Footer.module.css";

export default function PiePagina() {
  return (
    <div>
      <footer className={estilos.footer}>
        <p className={estilos.textoFooter}>Marcelo Vasquez © 2021 </p>
      </footer>
    </div>
  );
}
