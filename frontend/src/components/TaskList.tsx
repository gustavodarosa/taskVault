// filepath: c:\Users\gustavo.rosa8\OneDrive - SENAC-SC\taskVault\frontend\src\components\TaskList.tsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../index.css"; // Corrected import for global styles

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        setError("Erro ao carregar tarefas.");
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Lista de Tarefas</h2>
      {error && <div className="error">{error}</div>}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Vence em: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;