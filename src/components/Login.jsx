import "./styles.css"; // Asegúrate de que la ruta es correcta
function Login() {
  return (
    <div className="container mt-5">
      <form
        className="border p-4 rounded shadow-sm"
        style={{ width: "350px" }} // Estilo en línea para el ancho
      >
        <div className="mb-3">
          <label htmlFor="tituloLogin" className="form-label pri">
            <h4>LOGIN</h4>
          </label>
          <br />
          <label htmlFor="exampleInputDNI" className="form-label sec">
            DNI
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDNI"
            aria-describedby="dniHelp"
            pattern="\d{8}"
            maxLength="8"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            required
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Aceptar
        </button>
        <button type="button" className="btn btn-secondary">
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default Login;
