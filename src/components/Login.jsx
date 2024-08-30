// import "./styles.css"; // Asegúrate de que la ruta es correcta
// import Menu from "./Menu";
// function Login() {
//   /*---------------------------------------------------*/

//   /*---------------------------------------------------*/

//   return (
//     <div className="container">
//       {" "}
//       <Menu />
//       <div className="container mt-5">
//         <form
//           className="border p-4 rounded shadow-sm"
//           style={{ width: "350px" }} // Estilo en línea para el ancho
//         >
//           <div className="mb-3">
//             <label htmlFor="tituloLogin" className="form-label pri">
//               <h4>LOGIN</h4>
//             </label>
//             <br />
//             <label htmlFor="exampleInputDNI" className="form-label sec">
//               DNI
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputDNI"
//               aria-describedby="dniHelp"
//               pattern="\d{8}"
//               maxLength="8"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword"
//               required
//             />
//           </div>
//           <div className="mb-3 form-check"></div>
//           <button type="submit" className="btn btn-primary">
//             Aceptar
//           </button>
//           <button type="button" className="btn btn-secondary">
//             Cancelar
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

/*----------------------------------------------------*/

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth("actions");

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_BASE_URL}api-auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al realizar la petición");
        }
        return response.json();
      })
      .then((responseData) => {
        login(responseData.token);
        setData(responseData);
      })
      .catch((error) => {
        setIsError(true);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  }

  return (
    <div className="container">
      <Menu />
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-4">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="username">Nombre de usuario:</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="password">Contraseña:</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="button is-primary is-fullwidth"
                  >
                    Enviar
                  </button>
                  {isLoading && <p>Cargando...</p>}
                  {isError && <p>Error al cargar los datos.</p>}
                  {data && <p>{`Token obtenido: ${data.token}`}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
