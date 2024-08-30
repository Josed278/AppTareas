import Menu from "./Menu";
function Imagen() {
  return (
    <div className="container">
      <Menu />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/AcetoFive.JPG/1200px-AcetoFive.JPG"
        className="img-fluid"
        alt="..."
        style={{ width: "300px", height: "auto" }} // Ajusta el tamaño aquí
      />
    </div>
  );
}

export default Imagen;
