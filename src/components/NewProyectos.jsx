import "./styles.css"; // Asegúrate de que la ruta es correcta

function NewProyectos() {
  return (
    <div className="container mt-5">
      <form className="border p-4 rounded shadow-sm perfil-form">
        <h4 className="text-center mb-4">Crear Nueva Proyecto</h4>

        <div className="mb-3">
          <label htmlFor="inputNombre" className="form-label">
            Ingrese Nombre Proyecto
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            required
          />
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
        <button type="submit" className="btn btn-primary w-30">
          cancelar
        </button>
      </form>
    </div>
  );
}

export default NewProyectos;
