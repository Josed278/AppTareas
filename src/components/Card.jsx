import "./styles.css"; // Asegúrate de que la ruta es correcta
import Text from "./Text"; // Importa el componente Text
import Menu from "./Menu";
function Card() {
  return (
    <div className="container">
      <Menu />
      <div className="card" style={{ width: "550px" }}>
        <div className="card-body">
          <h5 className="card-title">Tareas</h5>
          <div className="d-flex align-items-center">
            <p className="card-text mb-0">Tarea:</p>
            <div className="ms-2">
              {" "}
              {/* Añade un margen entre los elementos */}
              <Text />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="card-text mb-0">DescripcionS:</p>
            <div className="ms-2">
              {" "}
              {/* Añade un margen entre los elementos */}
              <Text />
            </div>
          </div>{" "}
          <br /> <br />
          <a href="#" className="btn btn-primary btn-separate">
            Eliminar
          </a>
          <a href="#" className="btn btn-primary">
            Editar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
