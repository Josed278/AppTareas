function Menu() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Lista Proyectos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Crear Proyecto
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Crear Tarea
          </a>
        </li>
        <li className="nav-item ms-auto">
          <a className="nav-link active" aria-current="page" href="#">
            Iniciar Sesión
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
