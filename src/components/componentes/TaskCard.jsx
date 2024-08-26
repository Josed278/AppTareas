function TaskCard({ task }) {
  const { title, description } = task;

  return (
    <div className="card" style={{ width: "550px" }}>
      <div className="card-body">
        <h5 className="card-title">Tareas</h5>
        <div className="d-flex align-items-center">
          <p className="card-text mb-0">Tarea:</p>
          <div className="ms-2">
            <Text>{title}</Text>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p className="card-text mb-0">Descripción:</p>
          <div className="ms-2">
            <Text>{description}</Text>
          </div>
        </div>
        <br />
        <br />
        <a href="#" className="btn btn-primary btn-separate">
          Eliminar
        </a>
        <a href="#" className="btn btn-primary">
          Editar
        </a>
      </div>
    </div>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sandbox.academiadevelopers.com/taskmanager/tasks/")
      .then((response) => {
        setTasks(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
