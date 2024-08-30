import "./styles.css"; // Asegúrate de que la ruta es correcta
import Menu from "./Menu";
function NewCard() {
  return (
    <div className="container">
      {" "}
      <Menu />
      <div className="container mt-5">
        <form className="border p-4 rounded shadow-sm perfil-form">
          <h4 className="text-center mb-4">Crear Nueva Tarea</h4>

          <div className="mb-3">
            <label htmlFor="inputNombre" className="form-label">
              Ingrese Nombre Tarea
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNombre"
              required
            />
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "450px" }}
            >
              <option value="">Seleccione un Proyecto</option>
              <option value="1">Educación</option>
              <option value="2">Familiar</option>
              <option value="3">Laboral</option>
              <option value="4">Personal</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Descripcion
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-30">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewCard;
