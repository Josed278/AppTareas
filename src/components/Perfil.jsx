import "./styles.css"; // Asegúrate de que la ruta es correcta
import Menu from "./Menu";
function Perfil() {
  return (
    <div className="container">
      <Menu />
      <div className="container mt-5">
        <form className="border p-4 rounded shadow-sm perfil-form">
          <h4 className="text-center mb-4">PERFIL</h4>

          <div className="mb-3">
            <label htmlFor="inputNombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNombre"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputApellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="inputApellido"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="example@domain.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputFechaNacimiento" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="inputFechaNacimiento"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-30">
            Guardar
          </button>
        </form>
      </div>{" "}
    </div>
  );
}

export default Perfil;
